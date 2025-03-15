import { IAdapter, ServiceResponse, ServiceResult } from "../types/osrf";
import { IdlService } from "./idl";
import { IdlClassMapping, IdlClassName } from "../types/generated/idl-types";

export interface InHouseUseOptions {
  copyid?: number;
  barcode?: string;
  location: number; 
  count?: number; 
  use_time?: string; 
  non_cat_type?: number; 
}

export interface CheckInOptions {
  barcode?: string;
  copy_id?: number;
  force?: boolean; 
  noop?: boolean; 
  void_overdues?: boolean; 
  checkin_time?: string; 
  checkin_lib?: number; 
  checkin_workstation?: number; 
}

export interface MarkItemOptions {
  handle_checkin?: boolean; 
  handle_transit?: boolean; 
  handle_copy_delete_warning?: boolean; 
  handle_last_hold_copy?: boolean; 
  charge_patron?: boolean; 
  charge_amount?: number; 
  note?: string; 
}

export type ItemStatus = 
  | 'damaged'
  | 'missing'
  | 'bindery'
  | 'on_order'
  | 'ill'
  | 'cataloging'
  | 'reserves'
  | 'discard'

export class CircService {
  constructor(
    private readonly adapter: IAdapter,
    private readonly authToken: string,
    private readonly idl: IdlService
  ) {}

  /**
   * Creates an in-house use action
   * @param options Options for creating in-house use
   * @returns A ServiceResult containing the IDs of the newly created in-house use objects
   */
  async createInHouseUse(options: InHouseUseOptions): Promise<ServiceResult<number[], string>> {
    const method = options.non_cat_type 
      ? 'open-ils.circ.non_cat_in_house_use.create'
      : 'open-ils.circ.in_house_use.create';

    const [result, status] = await this.adapter.send<ServiceResponse<any>>({
      service: 'open-ils.circ',
      method,
      params: [this.authToken, options],
    });

    if (status && status.__p?.payload?.__c === "osrfMethodException") {
      return {
        data: null,
        error: status.__p.payload.__p.status
      };
    }

    if (result.__p?.payload?.__p?.status?.toLowerCase() !== "ok") {
      return {
        data: null,
        error: result.__p?.payload?.__p?.status || 'Unknown error'
      };
    }

    const content = result.__p.payload.__p.content.__p;
    return {
      data: content,
      error: null
    };
  }

  /**
   * Checks in an item
   * @param options Options for checking in an item
   * @param override Whether to override any errors that occur during checkin
   * @returns A ServiceResult containing the result of the checkin operation
   */
  async checkIn(options: CheckInOptions, override: boolean = false): Promise<ServiceResult<any, string>> {
    const method = override 
      ? 'open-ils.circ.checkin.override'
      : 'open-ils.circ.checkin';

    const [result, status] = await this.adapter.send<ServiceResponse<any>>({
      service: 'open-ils.circ',
      method,
      params: [this.authToken, options],
    });

    if (status && status.__p?.payload?.__c === "osrfMethodException") {
      return {
        data: null,
        error: status.__p.payload.__p.status
      };
    }

    if (result.__p?.payload?.__p?.status?.toLowerCase() !== "ok") {
      return {
        data: null,
        error: result.__p?.payload?.__p?.status || 'Unknown error'
      };
    }

    const content = result.__p.payload.__p.content.__p;
    return {
      data: content,
      error: null
    };
  }

  /**
   * Marks an item with a specific status
   * @param copyId The ID of the copy to mark
   * @param status The status to mark the item with
   * @param options Additional options for the mark operation
   * @returns A ServiceResult indicating success or failure
   */
  async markItem(copyId: number, status: ItemStatus, options: MarkItemOptions = {}): Promise<ServiceResult<boolean, string>> {
    const method = `open-ils.circ.mark_item_${status}`;

    const [result, statusResponse] = await this.adapter.send<ServiceResponse<any>>({
      service: 'open-ils.circ',
      method,
      params: [this.authToken, copyId, options],
    });

    if (statusResponse && statusResponse.__p?.payload?.__c === "osrfMethodException") {
      return {
        data: null,
        error: statusResponse.__p.payload.__p.status
      };
    }

    if (result.__p?.payload?.__p?.status?.toLowerCase() !== "ok") {
      return {
        data: null,
        error: result.__p?.payload?.__p?.status || 'Unknown error'
      };
    }

    const content = result.__p.payload.__p.content.__p;
    return {
      data: content === 1, // API returns 1 on success
      error: null
    };
  }
} 