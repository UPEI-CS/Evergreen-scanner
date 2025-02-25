import {  IDL_DEFS, IdlClassDefinition, IdlClassName } from "../types/idl-types-metadata";
import { IdlObject } from "../types/generated/idl-types";

interface OsrfObject {
    __c: string;
    __p: any[];
}

export interface IdlService {
    create<T extends IdlObject>(className: IdlClassName, seed?: any[]): T;
    fromHash<T extends IdlObject>(className: IdlClassName, hash: Record<string, any>): T;
    toHash(obj: IdlObject): Record<string, any>;
    getClassDef(className: IdlClassName): IdlClassDefinition;
    getPrimaryKey(className: IdlClassName): string | undefined;
}

export class IdlService implements IdlService {
    private isOsrfObject(value: any): value is OsrfObject {
        return value && 
               typeof value === 'object' && 
               '__c' in value && 
               '__p' in value &&
               Array.isArray(value.__p);
    }

    private processFieldValue(value: any): any {
        if (this.isOsrfObject(value)) {
            return this.create(value.__c as IdlClassName, value.__p);
        }
        
        if (Array.isArray(value)) {
            return value.map(item => this.processFieldValue(item));
        }
        
        return value;
    }

    /**
     * Create an IDL object
     * @param className The class name
     * @param seed The seed for the object
     * @returns The IDL object with getters and setters for each field
     */
    create<T extends IdlObject>(className: IdlClassName, seed?: any[]): T {
        const processedSeed = seed ? seed.map(value => this.processFieldValue(value)) : [];
        
        const obj = {
            a: processedSeed,
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
                        this.a[index] = this.processFieldValue(newValue);
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

}