import {
  AuthCredentials,
  AuthLoginResponse,
  AuthParams,
  IAdapter,
  AuthSessionDeleteResponse,
  ServiceResponse,
  OSRFClass,
  AuthSessionResetResponse,
} from "../types";
import { AU } from "../types/generated/idl-interfaces";
import { IdlService } from "./idl";
export class AuthService {
  public readonly session: SessionService;
  constructor(private readonly adapter: IAdapter, private readonly idl: IdlService) {
    this.session = new SessionService(adapter, idl);
  }

  async login(credentials: AuthCredentials) {
    const [result, status] = await this.adapter.send<AuthLoginResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.login",
      params: [credentials],
    });

    if (result.__p.payload.__p.status.toLowerCase() !== "ok") {
      throw new Error(result.__p.payload.__p.status);
    }

    return result.__p.payload.__p.content.payload;
  }
}

class SessionService {
  constructor(private readonly adapter: IAdapter, private readonly idl: IdlService) {}
  /**
   * Retrieve session information
   * @param authToken The authentication token
   * @param returnTime Whether to return session timeout information
   * @param doNotResetSession whether
   */
  async retrieve({ authToken, returnTime, doNotResetSession }: AuthParams) {
    const [result, status] = await this.adapter.send<ServiceResponse<any>>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.retrieve",
      params: [authToken, returnTime, doNotResetSession],
    });

    if (result.__p.payload.__p.status.toLowerCase() !== "ok") {
      throw new Error(result.__p.payload.__p.status);
    }
    if (returnTime) {
      const content = result.__p.payload.__p.content as {
        authtime: number;
        userobj: OSRFClass<"au", any[]>;
      }
      return {
        authtime: content.authtime,
        userobj: this.idl.create<AU>("au", content.userobj.__p),
      }
    }

    return this.idl.create<AU>("au", result.__p.payload.__p.content.__p);
  }

  /**
   * Delete/invalidate the session
   * @param authToken The authentication token
   */
  async delete({
    authToken,
  }: Pick<AuthParams, "authToken">) {
    const [result, status] = await this.adapter.send<AuthSessionDeleteResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.delete",
      params: [authToken],
    });

    if(result.__p.payload.__p.status.toLowerCase() !== "ok") {
      throw new Error(result.__p.payload.__p.status);
    }

    return result.__p.payload.__p.content;
  }

  /**
   * Reset the session timeout
   * @param authToken The authentication token
   */
  async resetTimeout({
    authToken,
  }: Pick<AuthParams, "authToken">): Promise<any> {
    const [result, status] = await this.adapter.send<AuthSessionResetResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.reset_timeout",
      params: [authToken],
    });

    if(result.__p.payload.__p.status.toLowerCase() !== "ok") {
      throw new Error(result.__p.payload.__p.status);
    }

    return result.__p.payload.__p.content.payload;
  }
}
