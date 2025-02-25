import {
  AuthCredentials,
  AuthLoginResponse,
  AuthParams,
  IAdapter,
  AuthSessionDeleteResponse,
  ServiceResponse,
  OSRFClass,
  AuthSessionResetResponse,
  ServiceResult,
  LoginPayload,
} from "../types";
import { AU } from "../types/generated/idl-types";
import { IdlService } from "./idl";
export class AuthService {
  public readonly session: SessionService;
  constructor(
    private readonly adapter: IAdapter,
    private readonly idl: IdlService
  ) {
    this.session = new SessionService(adapter, idl);
  }

  async login(
    credentials: AuthCredentials
  ): Promise<ServiceResult<LoginPayload, string>> {
    const [result, status] = await this.adapter.send<AuthLoginResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.login",
      params: [credentials],
    });

    if (status.__p.payload.__c === "osrfMethodException") {
      return {
        data: null,
        error: status.__p.payload.__p.status,
      };
    }
    if (result.__p.payload.__p.status.toLowerCase() !== "ok") {
      return {
        data: null,
        error: "unknown error",
      };
    }
    if (result.__p.payload.__p.content.payload === undefined) {
      return {
        data: null,
        error: result.__p.payload.__p.content.textcode,
      };
    }

    return {
      data: result.__p.payload.__p.content.payload,
      error: null,
    };
  }
}

class SessionService {
  constructor(
    private readonly adapter: IAdapter,
    private readonly idl: IdlService
  ) {}
  /**
   * Retrieve session information
   * @param authToken The authentication token
   * @param returnTime Whether to return session timeout information
   * @param doNotResetSession whether
   */
  async retrieve<T extends boolean>(
    params: AuthParams & { returnTime: T }
  ): Promise<
    ServiceResult<
      T extends true ? { authtime: number; userobj: AU } : AU,
      string
    >
  > {
    const { authToken, returnTime, doNotResetSession } = params;
    const [result, status] = await this.adapter.send<ServiceResponse<any>>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.retrieve",
      params: [authToken, returnTime ? 1 : 0, doNotResetSession ? 1 : 0],
    });

    if (status.__p.payload.__c === "osrfMethodException") {
      return {
        data: null,
        error: status.__p.payload.__p.status,
      };
    }

    if (result.__p.payload.__p.status.toLowerCase() !== "ok") {
      return {
        data: null,
        error: result.__p.payload.__p.status,
      };
    }

    if (returnTime) {
      const content = result.__p.payload.__p.content as {
        authtime: number;
        userobj: OSRFClass<"au", any[]>;
      };
      return {
        data: {
          authtime: content.authtime,
          userobj: this.idl.create<AU>("au", content.userobj.__p),
        } as T extends true ? { authtime: number; userobj: AU } : AU,
        error: null,
      };
    }

    return {
      data: this.idl.create<AU>("au", result.__p.payload.__p.content.__p) as T extends true ? { authtime: number; userobj: AU } : AU,
      error: null,
    };
  }

  /**
   * Delete/invalidate the session
   * @param authToken The authentication token
   */
  async delete({
    authToken,
  }: Pick<AuthParams, "authToken">): Promise<ServiceResult<string, string>> {
    const [result, status] = await this.adapter.send<AuthSessionDeleteResponse>(
      {
        service: "open-ils.auth",
        method: "open-ils.auth.session.delete",
        params: [authToken],
      }
    );

    if (status.__p.payload.__c === "osrfMethodException") {
      return {
        data: null,
        error: status.__p.payload.__p.status,
      };
    }

    if (result.__p.payload.__p.status.toLowerCase() !== "ok") {
      return {
        data: null,
        error: result.__p.payload.__p.status,
      };
    }

    return {
      data: result.__p.payload.__p.content,
      error: null,
    };
  }

  /**
   * Reset the session timeout
   * @param authToken The authentication token
   */
  async resetTimeout({
    authToken,
  }: Pick<AuthParams, "authToken">): Promise<ServiceResult<any, string>> {
    const [result, status] = await this.adapter.send<AuthSessionResetResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.reset_timeout",
      params: [authToken],
    });

    if (status.__p.payload.__c === "osrfMethodException") {
      return {
        data: null,
        error: status.__p.payload.__p.status,
      };
    }
    if (result.__p.payload.__p.status.toLowerCase() !== "ok") {
      return {
        data: null,
        error: result.__p.payload.__p.status,
      };
    }

    return {
      data: result.__p.payload.__p.content.payload,
      error: null,
    };
  }
}
