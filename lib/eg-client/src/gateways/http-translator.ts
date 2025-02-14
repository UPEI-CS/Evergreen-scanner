import { AuthService } from "../services/auth";
import {
  IAuth,
  IGateway,
  OpenSRFRequest,
  OSRFMessage,
  OSRFMethod,
  OSRFMethodMap,
  HTTPTranslatorConfig,
} from "../types";

export class HttpTranslator implements IGateway {
  private authService?: AuthService;
  constructor(private config: HTTPTranslatorConfig) {}

  get auth(): IAuth {
    if (!this.authService) {
      this.authService = new AuthService(this);
    }
    return this.authService;
  }

  async send<T>(req: OpenSRFRequest<keyof OSRFMethodMap>): Promise<T> {
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
