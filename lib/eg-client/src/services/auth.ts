import {
  AuthCredentials,
  AuthLoginResponse,
  AuthParams,
  AuthSessionRetrieveResponse,
  IAdapter,
  AuthSessionDeleteResponse,
} from "../types";
export class AuthService {
  public readonly session: SessionService;
  constructor(private readonly adapter: IAdapter) {
    this.session = new SessionService(adapter);
  }

  async login(credentials: AuthCredentials): Promise<AuthLoginResponse> {
    return this.adapter.send<AuthLoginResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.login",
      params: [credentials],
    });
  }
}

class SessionService {
  constructor(private readonly adapter: IAdapter) {}
  /**
   * Retrieve session information
   * @param authToken The authentication token
   * @param returnTime Whether to return session timeout information
   * @param doNotResetSession whether
  */
 async retrieve({authToken, returnTime, doNotResetSession}: AuthParams): Promise<AuthSessionRetrieveResponse> {
   return this.adapter.send({
     service: "open-ils.auth",
     method: "open-ils.auth.session.retrieve",
     params: [authToken, returnTime, doNotResetSession]
    });
  }
  
  /**
   * Delete/invalidate the session
   * @param authToken The authentication token
  */
 async delete({authToken}: Pick<AuthParams, "authToken">): Promise<AuthSessionDeleteResponse> {
   return this.adapter.send({
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
    return this.adapter.send({
      service: "open-ils.auth",
      method: "open-ils.auth.session.reset_timeout",
      params: [authToken],
    });
  }
}
