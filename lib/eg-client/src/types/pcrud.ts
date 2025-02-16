import { OSRFMessage, OSRFResult, OSRFConnectStatus } from "./osrf";

export interface PcrudOptions {
    flesh?: number;
    flesh_fields?: { [key: string]: string[] };
    limit?: number;
    offset?: number;
    order_by?: Array<{
        class: string;
        field: string;
        direction: 'ASC' | 'DESC';
    }>;
}

export interface PcrudRequestOptions {
    authoritative?: boolean;
    atomic?: boolean;
    idlist?: boolean;
    fleshSelectors?: boolean;
}

export type PcrudSearchResponse<T> = [
    OSRFMessage<OSRFResult<T[]>>,
    OSRFMessage<OSRFConnectStatus>
];
