export interface OSRFMessage<T = OSRFResult<any> | OSRFConnectStatus | OSRFMethod> {
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
  gateway: 'osrf-gateway-v1' | 'osrf-http-translator';
}

export interface HttpTranslatorConfig extends OpenSRFConfig {
  gateway: 'osrf-http-translator';
  headers?: Record<string, string>;
}

export interface OpenSRFRequest {
  service: string;
  method: string;
  params: any[];
}

