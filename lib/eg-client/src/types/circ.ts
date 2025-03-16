export const CHECKIN_SUCCESS_CODES = ['SUCCESS', 'ROUTE_ITEM', 'NO_CHANGE'] as const;
export type CheckinSuccessTextCode = typeof CHECKIN_SUCCESS_CODES[number];

export const CHECKIN_ERROR_CODES = ['ASSET_COPY_NOT_FOUND', 'COPY_IN_TRANSIT', 'CIRC_CLAIMS_RETURNED'] as const;
export type CheckinErrorCodes = typeof CHECKIN_ERROR_CODES[number];

export interface CheckinResponsePayload {
  desc: string;
  ilsevent: string;
  servertime: string;
  textcode: CheckinSuccessTextCode | CheckinErrorCodes;
  pid: number;
  stacktrace: string;
  payload?: {
    circ: any | null;
    copy: {
      __c: string;
      __p: any[];
    } | null;
    patron: any | null;
    hold: any | null;
    record: {
      __c: string;
      __p: any[];
    };
    transit: {
      __c: string;
      __p: any[];
    };
    volume: {
      __c: string;
      __p: any[];
    };
  };
  org?: string;
  ishold?: number;
}