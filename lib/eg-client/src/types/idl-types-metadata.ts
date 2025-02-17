const IDL_DEFINITIONS = require("./idl-definitions.json");


export interface IdlFieldDefinition {
    name: string;
    label?: string;
    datatype: string;
    required?: boolean;
    type?: 'link';
    key?: string;
    class?: string;
    reltype?: string;
    virtual?: boolean;
}

export interface IdlClassDefinition {
    name: string;
    label: string;
    table?: string;
    pkey?: string;
    fields: IdlFieldDefinition[];
    field_map: Record<string, IdlFieldDefinition>;
}

export type IdlClassName = keyof typeof IDL_DEFINITIONS;
export const IDL_DEFS: Record<IdlClassName, IdlClassDefinition> = IDL_DEFINITIONS;




