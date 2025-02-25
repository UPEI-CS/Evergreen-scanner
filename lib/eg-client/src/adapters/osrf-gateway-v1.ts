import { AdapterConfig, IAdapter, OpenSRFRequest } from "../types";
import { AuthService } from "../services/auth";
import { PCrudService } from "../services";
import { IdlService } from "../services/idl";
export class OsrfGatewayV1 implements IAdapter {
  private authService?: AuthService;
  private pcrudService?: PCrudService;
  private idl: IdlService;
  constructor(private config: AdapterConfig) {
    this.idl = new IdlService();
  }
  
  get auth(): AuthService {
    if (!this.authService) {
      this.authService = new AuthService(this, this.idl);
    }
    return this.authService;
  }
   pcrud(authToken: string): PCrudService {
    if (!this.pcrudService) {
      this.pcrudService = new PCrudService(this, authToken, this.idl);
    }
    return this.pcrudService;
  }
  async send<T>(req: OpenSRFRequest): Promise<T> {
    throw new Error("Method not implemented.");
  }
}