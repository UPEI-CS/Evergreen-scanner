import { AuthLoginResponse, AuthSessionDeleteResponse, AuthSessionResetResponse, AuthSessionRetrieveResponse, IAuth } from "./auth";

export interface OSRFMessage<
  T = OSRFResult<any> | OSRFConnectStatus | OSRFMethod
> {
  __c: "osrfMessage";
  __p: {
    threadTrace: string;
    locale: string;
    type: "RESULT" | "STATUS" | "REQUEST";
    payload: T;
  };
}

export interface OSRFMethod {
  __c: "osrfMethod";
  __p: {
    method: string;
    params: any[];
  };
}

export interface OSRFResult<T = any> {
  __c: "osrfResult";
  __p: {
    status: string;
    statusCode: string;
    content: T;
  };
}

export interface OSRFConnectStatus {
  __c: "osrfConnectStatus";
  __p: {
    status: string;
    statusCode: string;
  };
}

export interface HTTPTranslatorConfig {
  baseUrl?: string;
}

export interface OpenSRFConfig {
  baseUrl: string;
  gateway: "osrf-gateway-v1" | "osrf-http-translator";
}

export type OSRFMethodMap = {
  "open-ils.auth.session.retrieve": AuthSessionRetrieveResponse;
  "open-ils.auth.login": AuthLoginResponse;
  "open-ils.auth.session.delete": AuthSessionDeleteResponse;
  "open-ils.auth.session.reset_timeout": AuthSessionResetResponse;
};

export interface IGateway {
  readonly auth: IAuth;
  send<M extends keyof OSRFMethodMap>(
    req: OpenSRFRequest<M>
  ): Promise<OSRFMethodMap[M]>;
}

export interface OpenSRFRequest<T extends keyof OSRFMethodMap> {
  service: string;
  method: T;
  params: any[];
}
