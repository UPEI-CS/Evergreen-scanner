export const CHECKIN_SUCCESS_CODES = ['SUCCESS', 'ROUTE_ITEM', 'NO_CHANGE'] as const;
export type CheckinSuccessTextCode = typeof CHECKIN_SUCCESS_CODES[number];

export const CHECKIN_ERROR_CODES = ['ASSET_COPY_NOT_FOUND', 'COPY_IN_TRANSIT', 'CIRC_CLAIMS_RETURNED'] as const;
export type CheckinErrorCodes = typeof CHECKIN_ERROR_CODES[number];

type InHouseUseOptionsBase = {
  copyid?: number;
  barcode?: string;
  location: number;
  count?: number;
  use_time?: string;
  non_cat_type?: number;
}

export type InHouseUseOptions = 
  | (InHouseUseOptionsBase & Required<Pick<InHouseUseOptionsBase, 'copyid'>> & { barcode?: never })
  | (InHouseUseOptionsBase & Required<Pick<InHouseUseOptionsBase, 'barcode'>> & { copyid?: never });

type CheckInOptionsBase = {
  copy_id?: number;
  barcode?: string;
  force?: boolean;
  noop?: boolean;
  void_overdues?: boolean;
  checkin_time?: string;
  circ_lib?: number;
  checkin_workstation?: number;
}

export type CheckInOptions = 
  | (CheckInOptionsBase & Required<Pick<CheckInOptionsBase, 'copy_id'>> & { barcode?: never })
  | (CheckInOptionsBase & Required<Pick<CheckInOptionsBase, 'barcode'>> & { copy_id?: never });

export interface MarkItemOptions {
  handle_checkin?: boolean;
  handle_transit?: boolean;
  handle_copy_delete_warning?: boolean;
  handle_last_hold_copy?: boolean;
  charge_patron?: boolean;
  charge_amount?: number;
  note?: string;
}

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

export interface UpdateCopyInventoryResponsePayload {
  desc: string;
  ilsevent: string;
  servertime: string;
  textcode: string;
  pid: number;
}

/**
 * Statuses that can be manually set by staff with appropriate permissions
 */
export const MANUAL_ITEM_STATUSES = [
  'Damaged',
 // 'Missing',
  'Bindery',
 // 'On Order',
  'ILL',
  'Cataloging',
  'Reserves',
  'Discard',
//  'Missing Pieces'
] as const;

export type ManualItemStatus = typeof MANUAL_ITEM_STATUSES[number];

/**
 * Statuses that are automatically set by the system based on circulation activities
 */
export const SYSTEM_ITEM_STATUSES = [
  'Available',
  'Checked Out',
  'Lost',
  'In Process',
  'In Transit',
  'Reshelving',
  'On Holds Shelf',
  'On Reserve Shelf',
  'Long Overdue',
  'Lost and Paid',
  'Canceled Transit'
] as const;

export type SystemItemStatus = typeof SYSTEM_ITEM_STATUSES[number];

/**
 * All possible item statuses
 */
export const ALL_ITEM_STATUSES = [...MANUAL_ITEM_STATUSES, ...SYSTEM_ITEM_STATUSES] as const;

/**
 * Union type representing all possible item statuses
 */
export type ItemStatus = typeof ALL_ITEM_STATUSES[number];

