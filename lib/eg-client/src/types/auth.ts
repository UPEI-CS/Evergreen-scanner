import { OSRFMessage, OSRFResult, OSRFConnectStatus, OSRFClass } from "./osrf";

export type AuthTextCode = 
  | 'SUCCESS'
  | 'LOGIN_FAILED'
  | 'NO_SESSION'
  | string;

/** User object structure */
export interface UserObject extends OSRFClass<'au', any[]> {}

/** Session content with return time */
export interface SessionContentWithReturnTime {
  authtime: number;
  userobj: UserObject;
}

/** Authentication credentials */
export interface AuthCredentials {
  /** Username for login */
  username: string;
  /** Password for login */
  password: string;
  /** Type of login being performed */
  type: 'staff' | 'opac';
  /** Optional organization ID */
  org?: number | null;
}

/** Base auth response content */
export interface AuthContent<T = LoginPayload | number> {
  /** Event ID indicating success/failure */
  ilsevent: number;
  /** Text code describing the event */
  textcode: AuthTextCode;
  /** Human-readable description */
  desc: string;
  /** Process ID */
  pid: number;
  /** Stack trace */
  stacktrace: string;
  /** Payload data - can be LoginPayload for successful login or number for other responses */
  payload: T;
}

/** Successful login response payload */
export interface LoginPayload {
  /** Authentication token for the session */
  authtoken: string;
  /** Session timeout in seconds */
  authtime: number;
  /** Whether the login is provisional (0 = no, 1 = yes) */
  provisional: 0 | 1;
}

/** Parameters for authentication operations */
export interface AuthParams {
  /** Authentication token for the session */
  authToken: string;
  /** Whether to return the auth time (0 = no, 1 = yes) */
  returnTime?: 0 | 1;
  /** Whether to prevent session timeout reset (0 = no, 1 = yes) */
  doNotResetSession?: 0 | 1;
}

export type AuthLoginResponse = [
  OSRFMessage<OSRFResult<AuthContent<LoginPayload>>>,
  OSRFMessage<OSRFConnectStatus>
];

export type AuthSessionResetResponse = [
  OSRFMessage<OSRFResult<AuthContent<number>>>,
  OSRFMessage<OSRFConnectStatus>
];

export type AuthSessionRetrieveResponse = [
  OSRFMessage<OSRFResult<UserObject | SessionContentWithReturnTime>>,
  OSRFMessage<OSRFConnectStatus>
];

export type AuthSessionDeleteResponse = [
  OSRFMessage<OSRFResult<string>>,
  OSRFMessage<OSRFConnectStatus>
];
