import { OSRFMessage, OSRFResult, OSRFConnectStatus } from "./osrf";

export interface OSRFSessionRetrieveContent {
  __c: string;
  __p: any[];
}

export interface AuthCredentials {
  username: string;
  password: string;
  type: "staff" | "opac";
  org?: number | null;
}

export interface AuthContent {
  ilsevent: number;
  textcode: string;
  desc: string;
  pid: number;
  stacktrace: string;
  payload: {
    authtoken: string;
    authtime: number;
  };
}

export type ServiceResponse<T> = [
  OSRFMessage<T>,
  OSRFMessage<OSRFConnectStatus>
];

export type AuthLoginResponse = ServiceResponse<OSRFResult<AuthContent>>;
export type AuthSessionRetrieveResponse = ServiceResponse<
  OSRFResult<OSRFSessionRetrieveContent>
>;
