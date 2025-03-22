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
  OSRFMessage,
  OSRFConnectStatus,
  OSRFMethodException,
  OSRFResult,
  AuthContent,
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
    const response = await this.adapter.send<AuthLoginResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.login",
      params: [credentials],
    });
    console.log(JSON.stringify(response, null, 2));
    if(response.length === 0) {
      return {
        data: null,
        error: "No response from server",
      };
    }
    if(response.length === 1) {
      const result = response[0] as OSRFMessage<
        OSRFConnectStatus | OSRFMethodException
      >;
      return {
        data: null,
        error: result.__p.payload.__p.status,
      };
    }
    const result = response[0] as OSRFMessage<OSRFResult<AuthContent<LoginPayload>>>
    const content = result.__p.payload.__p.content
    
    if(content.textcode !== "SUCCESS") {
      return {
        data: null,
        error: content.desc,
      };
    }
    return {
      data: content.payload,
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
    const response = await this.adapter.send<ServiceResponse<any>>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.retrieve",
      params: [authToken, returnTime ? 1 : 0, doNotResetSession ? 1 : 0],
    });
    console.log(JSON.stringify(response, null, 2));
    if(response.length === 0) {
      return {
        data: null,
        error: "No response from server",
      };
    }

    if(response.length === 1) {
      const result = response[0] as OSRFMessage<
        OSRFConnectStatus | OSRFMethodException
      >;
      return {
        data: null,
        error: result.__p.payload.__p.status,
      };
    }

    const result = response[0] as OSRFMessage<OSRFResult<any>>
    const content = result.__p.payload.__p.content
    if( 'textcode' in content && 'desc' in content) {
      return {
        data: null,
        error: content.desc,
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
    const response = await this.adapter.send<AuthSessionDeleteResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.delete",
      params: [authToken],
    });
    console.log(JSON.stringify(response, null, 2));
    if (response.length === 0) {
      return {
        data: null,
        error: "No response from server",
      };
    }

    if (response.length === 1) {
      const result = response[0] as OSRFMessage<
        OSRFConnectStatus | OSRFMethodException
      >;
      return {
        data: null,
        error: result.__p.payload.__p.status,
      };
    }

    const result = response[0] as OSRFMessage<OSRFResult<string>>


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
  }: Pick<AuthParams, "authToken">): Promise<ServiceResult<number, string>> {
    const response = await this.adapter.send<AuthSessionResetResponse>({
      service: "open-ils.auth",
      method: "open-ils.auth.session.reset_timeout",
      params: [authToken],
    });
    console.log(JSON.stringify(response, null, 2));
    if (response.length === 0) {
      return {
        data: null,
        error: "No response from server",
      };
    }

    if (response.length === 1) {
      const result = response[0] as OSRFMessage<
        OSRFConnectStatus | OSRFMethodException
      >;
      return {
        data: null,
        error: result.__p.payload.__p.status,
      };
    }

    const result = response[0] as OSRFMessage<OSRFResult<AuthContent<number>>>  
    if(result.__p.payload.__p.content.textcode !== "SUCCESS") {
      return {
        data: null,
        error: result.__p.payload.__p.content.desc,
      };
    }

    return {
      data: result.__p.payload.__p.content.payload,
      error: null,
    };
  }
}
