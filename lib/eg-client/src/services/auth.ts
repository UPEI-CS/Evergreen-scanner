import {
  AuthCredentials,
  AuthLoginResponse,
  AuthParams,
  AuthSessionRetrieveResponse,
  IAuth,
  IGateway,
  ISession,
} from "../types";
export class AuthService implements IAuth {
  public readonly session: ISession;
  constructor(private readonly gateway: IGateway) {
    this.session = new Session(gateway);
  }

  async login(credentials: AuthCredentials): Promise<AuthLoginResponse> {
    return this.gateway.send({
      service: "open-ils.auth",
      method: "open-ils.auth.login",
      params: [credentials],
    });
  }
}

class Session implements ISession {
  constructor(private readonly gateway: IGateway) {}
  /**
   * Retrieve session information
   * @param authToken The authentication token
   * @param returnTime Whether to return session timeout information
   * @param doNotResetSession whether
  */
 async retrieve({authToken, returnTime, doNotResetSession}: AuthParams): Promise<AuthSessionRetrieveResponse> {
   return this.gateway.send({
     service: "open-ils.auth",
     method: "open-ils.auth.session.retrieve",
     params: [authToken, returnTime, doNotResetSession]
    });
  }
  
  /**
   * Delete/invalidate the session
   * @param authToken The authentication token
  */
 async delete({authToken}: Pick<AuthParams, "authToken">): Promise<any> {
   return this.gateway.send({
     service: "open-ils.auth",
     method: "open-ils.auth.session.delete",
     params: [authToken],
   });
 }
 
  /**
   * Reset the session timeout
   * @param authToken The authentication token
   */
  async resetTimeout({authToken}: Pick<AuthParams, "authToken">): Promise<any> {
    return this.gateway.send<any>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.reset_timeout",
      params: [authToken],
    });
  }
}
