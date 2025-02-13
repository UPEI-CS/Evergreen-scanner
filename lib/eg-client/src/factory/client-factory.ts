import { OpenSRFClientBase } from "../clients/base";
import { OpenSRFConfig } from "../types";
import { OsrfGatewayClient, OsrfHttpTranslator } from "../clients";
export class OpenSRFClientFactory {
    static create(config: OpenSRFConfig): OpenSRFClientBase {
        switch (config.gateway) {
            case 'osrf-gateway-v1':
                return new OsrfGatewayClient(config);
            case 'osrf-http-translator':
                return new OsrfHttpTranslator(config);
            default:
                throw new Error(`Unsupported gateway: ${config.gateway}`);
        }
    }
}