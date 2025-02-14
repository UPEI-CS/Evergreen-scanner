import { OSRFMessage, OSRFResult, OSRFConnectStatus } from "./osrf";
export interface SessionRetrieveContent {
  __c: "au";
  __p: any[];
}

export interface SessionContentWithReturnTime {
  authtime: number;
  userobj: SessionRetrieveContent;
}

export interface AuthCredentials {
  username: string;
  password: string;
  type: "staff" | "opac";
  org?: number | null;
}

export interface AuthContent<T = LoginPayload | number> {
  ilsevent: number;
  textcode: string;
  desc: string;
  pid: number;
  stacktrace: string;
  payload: T;
}

export interface LoginPayload {
  authtoken: string;
  authtime: number;
  provisional: number;
}

export interface AuthParams {
  authToken: string;
  returnTime?: 0 | 1;
  doNotResetSession?: 0 | 1;
}

export interface IAuth {
  login(credentials: AuthCredentials): Promise<AuthLoginResponse>;
  session: ISession;
}
export interface ISession {
  retrieve(params: AuthParams): Promise<AuthSessionRetrieveResponse>;
  delete(params: Pick<AuthParams, "authToken">): Promise<AuthSessionDeleteResponse>;
  resetTimeout(
    params: Pick<AuthParams, "authToken">
  ): Promise<AuthSessionResetResponse>;
}

export type ServiceResponse<T> = [
  OSRFMessage<T>,
  OSRFMessage<OSRFConnectStatus>
];

export type AuthLoginResponse = ServiceResponse<
  OSRFResult<AuthContent<LoginPayload>>
>;
export type AuthSessionResetResponse = ServiceResponse<
  OSRFResult<AuthContent<number>>
>;
export type AuthSessionRetrieveResponse = [
  OSRFMessage<
    OSRFResult<SessionRetrieveContent | SessionContentWithReturnTime>
  >,
  OSRFMessage<OSRFConnectStatus>
];

export type AuthSessionDeleteResponse = [
  OSRFMessage<OSRFResult<string>>,
  OSRFMessage<OSRFConnectStatus>
];
