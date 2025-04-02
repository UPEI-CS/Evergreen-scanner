import { IAdapter, ServiceResult, ServiceResponse } from "../types";

export class HealthService{

    constructor(private readonly adapter: IAdapter){}

    async ping(message: string): Promise<ServiceResult<string, string> >{
        const response = await this.adapter.send<ServiceResponse<string>>({
            service: "open-ils.auth",
            method: "opensrf.system.echo",
            params: [message]
        })
        console.log(JSON.stringify(response, null, 2));
        if (response.length === 0) {
            return {
                data: null,
                error: "No response from server"
            }
        }

        if (response[0].__p.payload.__c !== "osrfResult"){
           return {
            data: null,
            error: "invalid response from server"
           }
        }

        const content =  response[0].__p.payload.__p.content

        if (content !== message){
            return {
                data: null,
                error: "invalid response from server"
            }
        }

        return {
            data: content,
            error: null
        }
    }
}