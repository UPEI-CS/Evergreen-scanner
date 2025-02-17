import { IDL_DEFS, IdlClassDefinition, IdlClassName } from "../types/idl-types-metadata";

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

export interface IdlService {
    create<T extends IdlObject>(className: IdlClassName, seed?: any[]): T;
    fromHash<T extends IdlObject>(className: IdlClassName, hash: Record<string, any>): T;
    toHash(obj: IdlObject): Record<string, any>;
    getClassDef(className: IdlClassName): IdlClassDefinition;
    getPrimaryKey(className: IdlClassName): string | undefined;
}

export class IdlService implements IdlService {

    /**
     * Create an IDL object
     * @param className The class name
     * @param seed The seed for the object
     * @returns The IDL object with getters and setters for each field
     */

    create<T extends IdlObject>(className: IdlClassName, seed?: any[]): T {
        const obj = {
            a: seed,
            classname: className,
            _isfieldmapper: true
        };

        const fieldDefs = IDL_DEFS[className].fields;
        
        fieldDefs.forEach((field, index) => {
            if (field.virtual && ['isnew', 'ischanged', 'isdeleted'].includes(field.name)) {
                return;
            }
            
            Object.defineProperty(obj, field.name, {
                value: function(newValue?: any) {
                    if (arguments.length === 1) {
                        this.a[index] = newValue;
                    }
                    return this.a[index];
                },
                writable: false,
                configurable: false
            });
        });

        return obj as T;
    }
    /**
     * Create an IDL object from a hash
     * @param className The class name
     * @param hash The hash to create the object from
     * @returns The IDL object with getters and setters for each field
     */

    fromHash<T extends IdlObject>(className: IdlClassName, hash: Record<string, any>): T {
        const fieldDefs = IDL_DEFS[className].fields;
        const arr = fieldDefs.map(field => hash[field.name]);
        return this.create<T>(className, arr);
    }
    /**
     * Convert an IDL object to a hash
     * @param obj The IDL object to convert
     * @returns The hash of the IDL object
     */

    toHash(obj: IdlObject): Record<string, any> {
        if (!obj._isfieldmapper) {
            return obj as Record<string, any>;
        }

        const fieldDefs = IDL_DEFS[obj.classname].fields;
        const hash: Record<string, any> = {};
        
        fieldDefs.forEach((field, idx) => {
            if (!field.virtual) {
                hash[field.name] = obj.a[idx];
            }
        });

        return hash;
    }

    /**
     * Get the class definition
     * @param className The class name
     * @returns The class definition
     */

    getClassDef(className: IdlClassName): IdlClassDefinition {
        return IDL_DEFS[className];
    }
    /**
     * Get the primary key of the class
     * @param className The class name
     * @returns The primary key of the class
     */

    getPrimaryKey(className: IdlClassName): string | undefined {
        return IDL_DEFS[className].pkey;
    }
}