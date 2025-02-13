import { OpenSRFClientBase } from "./base";
import { OpenSRFRequest, OSRFMethod, OSRFMessage } from "../types/osrf";
import { AuthService } from "../services/auth";
export class OsrfGatewayClient extends OpenSRFClientBase {
    async request<T>(req: OpenSRFRequest): Promise<T> {
        throw new Error("Not implemented");
    }
}

export class OsrfHttpTranslator extends OpenSRFClientBase {
    public auth: AuthService = new AuthService(this);
    async request<T>(req: OpenSRFRequest): Promise<T> {
        const { service, method, params } = req;
        const url = `${this.config.baseUrl}/osrf-http-translator`;
        const body: OSRFMessage<OSRFMethod>[] = [
            {
                __c: "osrfMessage",
                __p: {
                  threadTrace: Math.random().toString(36).substring(2, 15),
                  locale: "en-US",
                  type: "REQUEST",
                  payload: {
                    __c: "osrfMethod",
                    __p: {
                      method: `${method}`,
                      params: params,
                    },
                  },
                },
              }
        ];
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'X-OpenSRF-service': service,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `osrf-msg=${encodeURIComponent(JSON.stringify(body))}`,
        });
        const data = await response.json();
        return data as T;
    }

}

async function test() {
  const client = new OsrfHttpTranslator({
    baseUrl: "http://localhost:8080",
    gateway: "osrf-http-translator"
  });
  
}
