
export type PcrudParams = [
    string,  
    SearchQuery,
    SearchOptions?
];

export interface SearchQuery {
    id?: number;
    barcode?: string;
    call_number?: number;
    circ_lib?: number;
    location?: number;
    status?: number;
    deleted?: boolean;
    opac_visible?: boolean;
    circulate?: boolean;
    ref?: boolean;
    holdable?: boolean;
    copy_number?: number;
    circ_modifier?: string;
    create_date?: string;
    edit_date?: string;
    [key: string]: any;
}

export interface SearchOptions {
    flesh?: number;
    flesh_fields?: {
        [key: string]: string[];
    };
    order_by?: {
        [key: string]: string | {
            field: string;
            direction: 'asc' | 'desc';
        };
    };
    limit?: number;
    offset?: number;
    select?: {
        [key: string]: string[];
    };
    atomic?: boolean;
    idlist?: boolean;
}