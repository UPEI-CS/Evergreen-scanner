import { IAdapter, OpenSRFRequest, OSRFMethodMap } from "../types";
import { AuthService } from "../services/auth";
import { IAuth } from "../types/auth";
export class OsrfGatewayV1 implements IAdapter {
  private authService?: AuthService;
  async send<T>(req: OpenSRFRequest<keyof OSRFMethodMap>): Promise<T> {
    throw new Error("Method not implemented.");
  }
  get auth(): IAuth {
    if (!this.authService) {
      this.authService = new AuthService(this);
    }
    return this.authService;
  }
}