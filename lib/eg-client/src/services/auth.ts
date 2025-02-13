import {
  AuthCredentials,
  AuthLoginResponse,
  AuthSessionRetrieveResponse,
} from "../types";
import { OsrfHttpTranslator } from "../clients";
import { ServiceBase } from "./base";
export class AuthService extends ServiceBase {
  public readonly session: SessionService;
  constructor(client: OsrfHttpTranslator) {
    super(client, "open-ils.auth");
    this.session = new SessionService(this.client, this.service);
  }

  async login(credentials: AuthCredentials): Promise<AuthLoginResponse> {
    return this.call<AuthLoginResponse>(
      'open-ils.auth.login',
      credentials
    );
  }
}

class SessionService extends ServiceBase {
  /**
   * Retrieve session information
   * @param authToken The authentication token
   * @param returnTime Whether to return session timeout information
   * @param doNotResetSession If true, don't reset the session timeout
   */
  async retrieve(
    authToken: string,
    returnTime?: 0 | 1,
    doNotResetSession?: 0 | 1
  ): Promise<AuthSessionRetrieveResponse> {
    return this.call<any>(
      "open-ils.auth.session.retrieve",
      authToken,
      returnTime,
      doNotResetSession
    );
  }

  /**
   * Delete/invalidate the session
   */
  async delete(): Promise<void> {
    return this.call<any>(
      "open-ils.auth.session.delete"
    );
  }

  /**
   * Reset the session timeout
   */
  async resetTimeout(): Promise<any> {
    return this.call<any>(
      "open-ils.auth.session.reset_timeout"
    );
  }
}

