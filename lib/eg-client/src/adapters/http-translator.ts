import { AuthService, PCrudService } from "../services";
import {
  IAdapter,
  OpenSRFRequest,
  OSRFMessage,
  OSRFMethod,
  HTTPTranslatorConfig,
} from "../types";
export class HttpTranslator implements IAdapter {
  private authService?: AuthService;
  private pcrudService?: PCrudService;
  constructor(private config: HTTPTranslatorConfig) {}

  get auth(): AuthService {
    if (!this.authService) {
      this.authService = new AuthService(this);
    }
    return this.authService;
  }

   pcrud(authToken: string): PCrudService {
    if (!this.pcrudService) {
      this.pcrudService = new PCrudService(this, authToken);
    }
    return this.pcrudService;
  }
  async send<T>(req: OpenSRFRequest): Promise<T> {
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
      },
    ];
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "X-OpenSRF-service": service,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `osrf-msg=${encodeURIComponent(JSON.stringify(body))}`,
    });
    const data = await response.json();
    return data as T;
  }
}
