// idl.service.ts
export interface IdlObject {
    a: any[];
    classname: string;
    _isfieldmapper: boolean;
    [key: string]: any;
}

export interface IdlField {
    name: string;
    label?: string;
    datatype: string;
    selector?: string;
    class?: string;
}

export interface IdlClass {
    fields: IdlField[];
    field_map: { [key: string]: IdlField };
    pkey: string;
    classname: string;
}

export class IdlService {
    private classes: { [key: string]: IdlClass } = {};
    private constructors: { [key: string]: any } = {};

    constructor(idlDefinitions?: any) {
        if (idlDefinitions) {
            this.loadIdl(idlDefinitions);
        }
    }

    loadIdl(definitions: any) {
        this.classes = definitions;
        this.parseIdl();
    }

    private parseIdl(): void {
        Object.keys(this.classes).forEach(className => {
            this.createConstructor(className, this.classes[className].fields);
        });
    }

    private createConstructor(className: string, fields: IdlField[]) {
        this.classes[className].classname = className;

        const generator = () => {
            const Constructor = function(this: any, seed?: any[]) {
                this.a = seed || [];
                this.classname = className;
                this._isfieldmapper = true;
            };

            fields.forEach((field, idx) => {
                Constructor.prototype[field.name] = function(newValue?: any) {
                    if (arguments.length === 1) {
                        this.a[idx] = newValue;
                    }
                    return this.a[idx];
                };
            });

            return Constructor;
        };

        this.constructors[className] = generator();
    }

    create(className: string, seed?: any[]): IdlObject {
        if (this.constructors[className]) {
            return new this.constructors[className](seed);
        }
        throw new Error(`No such IDL class ${className}`);
    }

    // Helper method to convert raw API response to IDL objects
    fromHash(className: string, hash: any): IdlObject {
        const cls = this.classes[className];
        if (!cls) {
            throw new Error(`No such IDL class ${className}`);
        }

        const seed = cls.fields.map(field => hash[field.name]);
        const obj = this.create(className, seed);

        return obj;
    }

    // Helper method to convert IDL object back to plain object
    toHash(obj: IdlObject): any {
        if (!obj._isfieldmapper) {
            return obj;
        }

        const cls = this.classes[obj.classname];
        if (!cls) {
            throw new Error(`No such IDL class ${obj.classname}`);
        }

        const hash: any = {};
        cls.fields.forEach((field, idx) => {
            hash[field.name] = obj.a[idx];
        });

        return hash;
    }

    getClassDef(className: string): IdlClass | undefined {
        return this.classes[className];
    }

    getPrimaryKey(className: string): string | undefined {
        return this.classes[className]?.pkey;
    }
}