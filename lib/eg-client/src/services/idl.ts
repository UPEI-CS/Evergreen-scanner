import { DOMParser } from 'xmldom';
export interface IdlObject {
    a: any[];
    classname: string;
    _isfieldmapper: boolean;
    [fields: string]: any;
}
interface IdlField {
    name: string;
    label?: string;
    datatype: string;
    required?: boolean;
    virtual?: boolean;
    array_position: number;
}

interface IdlLink {
    field: string;
    class: string;
    key: string;
    reltype: string;
}

interface IdlClass {
    name: string;
    fields: IdlField[];
    field_map: { [key: string]: IdlField };
    pkey?: string;
    links?: { [key: string]: IdlLink };
}
export class IdlService {
    classes: Record<string, IdlClass> = {};
    constructors: Record<string, any> = {};

    async loadIdl() {
        const response = await fetch('http://localhost:8080/reports/fm_IDL.xml');
        const idlXml = await response.text();
        
        this.classes = this.parseIdlXml(idlXml);
        this.initializeClasses();
        return this.classes;
    }

    create(cls: string, seed?: any[]): IdlObject {
        if (this.constructors[cls]) {
            return new this.constructors[cls](seed);
        }
        throw new Error(`No such IDL class ${cls}`);
    }

    private initializeClasses() {
        Object.keys(this.classes).forEach(className => {
            const fields = this.classes[className].fields;
            
            const ClassConstructor = function( this: IdlObject, seed: any) {
                this.a = seed || [];
                this.classname = className;
                this._isfieldmapper = true;
            };

            fields.forEach((field, idx) => {
                ClassConstructor.prototype[field.name] = function(n: any) {
                    if (arguments.length === 1) {
                        this.a[idx] = n;
                    }
                    return this.a[idx];
                };
            });

            this.constructors[className] = ClassConstructor;
        });
    }

    toHash(obj: any): any {
        if (!obj || typeof obj !== 'object') return obj;
        
        if (obj._isfieldmapper) {
            const hash: Record<string, any> = {};
            const fields = this.classes[obj.classname].fields;
            fields.forEach((field, idx) => {
                hash[field.name] = this.toHash(obj.a[idx]);
            });
            return hash;
        }
        
        if (Array.isArray(obj)) {
            return obj.map(item => this.toHash(item));
        }
        
        return obj;
    }
    private parseIdlXml(xmlString: string): { [key: string]: IdlClass } {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        const classes: { [key: string]: IdlClass } = {};

        // Get all class elements
        const classNodes = xmlDoc.getElementsByTagName('class');

        for (let i = 0; i < classNodes.length; i++) {
            const classNode = classNodes[i];
            const className = classNode.getAttribute('id');

            if (!className) continue;

            const classObj: IdlClass = {
                name: className,
                fields: [],
                field_map: {},
            };

            const fieldsNode = classNode.getElementsByTagName('fields')[0];
            if (fieldsNode) {
                classObj.pkey = fieldsNode.getAttribute('oils_persist:primary') || 'id';
            }

            // Parse fields
            const fieldNodes = classNode.getElementsByTagName('field');
            let arrayPosition = 0;

            for (let j = 0; j < fieldNodes.length; j++) {
                const fieldNode = fieldNodes[j];
                const fieldName = fieldNode.getAttribute('name');

                // no idea why we skip these. seen in open-ILS/web/js/idl.js
                if (fieldName === 'isnew' || 
                    fieldName === 'ischanged' || 
                    fieldName === 'isdeleted') {
                    continue;
                }
                //TODO: make sure name, label, datatype, required, virtual are not null
                const field: IdlField = {
                    name: fieldName || 'somethingWentwrongName',
                    label: fieldNode.getAttribute('reporter:label') || fieldName || 'somethingWentwrongLabel',
                    datatype: fieldNode.getAttribute('reporter:datatype') || 'text',
                    required: fieldNode.getAttribute('oils_obj:required') === 'true',
                    virtual: fieldNode.getAttribute('oils_persist:virtual') === 'true',
                    array_position: arrayPosition++
                };

                classObj.fields.push(field);
                classObj.field_map[fieldName!] = field;
            }

            // Parse links
            const linksNode = classNode.getElementsByTagName('links')[0];
            if (linksNode) {
                classObj.links = {};
                const linkNodes = linksNode.getElementsByTagName('link');

                for (let k = 0; k < linkNodes.length; k++) {
                    const linkNode = linkNodes[k];
                    const fieldName = linkNode.getAttribute('field');
                    if (!fieldName) continue;

                    const link: IdlLink = {
                        field: fieldName || 'somethingWentwrongField',
                        class: linkNode.getAttribute('class') || 'somethingWentwrongClass',
                        key: linkNode.getAttribute('key') || 'somethingWentwrongKey',
                        reltype: linkNode.getAttribute('reltype') || 'somethingWentwrongReltype'
                    };

                    classObj.links[fieldName] = link;

    
                    if (classObj.field_map[fieldName]) {
                        classObj.field_map[fieldName].datatype = 'link';
                    }
                }
            }

            // Add special fields at the end
            ['isnew', 'ischanged', 'isdeleted'].forEach(specialField => {
                const field: IdlField = {
                    name: specialField,
                    datatype: 'bool',
                    virtual: true,
                    array_position: arrayPosition++
                };
                classObj.fields.push(field);
                classObj.field_map[specialField] = field;
            });

            classes[className] = classObj;
        }

        return classes;
    }
}

