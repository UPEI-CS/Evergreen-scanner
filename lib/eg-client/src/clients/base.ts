import { OpenSRFRequest } from "../types/osrf";

import { OpenSRFConfig } from "../types";

export abstract class OpenSRFClientBase {
    protected config: OpenSRFConfig;

    constructor(config: OpenSRFConfig) {
        this.config = config;
    }

    abstract request<T>(req: OpenSRFRequest): Promise<T>;
}