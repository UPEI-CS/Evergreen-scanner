import { OpenSRFClientBase } from "../clients/base";

export abstract class ServiceBase {
    protected client: OpenSRFClientBase;
    protected service: string;

    constructor(client: OpenSRFClientBase, service: string) {
        this.client = client;
        this.service = service;
    }


    protected async call<T>(method: string, ...params: any[]): Promise<T> {
        return this.client.request<T>({
            service: this.service,
            method,
            params: params
        });
    }
}