export type OSRFStatusCode = '200' | '205' | '404' | '500' | string;
export type OSRFMessageType = 'RESULT' | 'STATUS' | 'REQUEST';

export interface OSRFClass<T extends string, P> {
  __c: T;
  __p: P;
}

// Common fields for all message types
type MessageFields = {
  type: OSRFMessageType;
  threadTrace: string;
  locale: string;
  api_level: number;
}


// Fields for REQUEST messages
type RequestFields = Partial<MessageFields> & {
  type: 'REQUEST';
}


export type OSRFMessage<T = OSRFResult<any> | OSRFConnectStatus | OSRFMethod> = {
  __c: 'osrfMessage';
  __p: (T extends OSRFMethod 
    ? RequestFields 
    : MessageFields) & {
      payload: T;
    };
}

export interface OSRFMethod extends OSRFClass<'osrfMethod', {
  method: string;
  params: any[];
}> {}


export interface OSRFResult<T = any> extends OSRFClass<'osrfResult', {
  status: string;
  statusCode: OSRFStatusCode;
  content: T;
}> {}


export interface OSRFConnectStatus extends OSRFClass<'osrfConnectStatus', {
  status: string;
  statusCode: OSRFStatusCode;
}> {}

export interface OSRFMethodException extends OSRFClass<'osrfMethodException', {
  status: string;
  statusCode: OSRFStatusCode;
}> {}

export interface AdapterConfig {
  baseUrl?: string;
}



export interface IAdapter {
  send<T>(
    req: OpenSRFRequest
  ): Promise<T>;
}

export interface OpenSRFRequest {
  service: string;
  method: string;
  params: any[];
}

export type ServiceResponse<T> = [
  OSRFMessage<OSRFResult<T>>,
  OSRFMessage<OSRFConnectStatus | OSRFMethodException>
];
export interface ServiceResult<T = any, E = any> {
  data: T | null;
  error: E | null;
}
