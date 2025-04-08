import {
  IAdapter,
  OSRFConnectStatus,
  OSRFMessage,
  OSRFMethodException,
  ServiceResponse,
  ServiceResult,
  OSRFResult,
} from "../types/osrf";

import {
  CHECKIN_SUCCESS_CODES,
  CheckinResponsePayload,
  CheckinSuccessTextCode,
  InHouseUseOptions,
  CheckInOptions,
  MarkItemOptions,
  ManualItemStatus,
} from "../types/circ";

export class CircService {
  constructor(
    private readonly adapter: IAdapter,
    private readonly authToken: string
  ) {}

  /**
   * Creates an in-house use action
   * @param options Options for creating in-house use
   * @returns A ServiceResult containing the IDs of the newly created in-house use objects
   */
  async createInHouseUse(
    options: InHouseUseOptions
  ): Promise<ServiceResult<number, string>> {
    const method = options.non_cat_type
      ? "open-ils.circ.non_cat_in_house_use.create"
      : "open-ils.circ.in_house_use.create";

    const response = await this.adapter.send<ServiceResponse<any>>({
      service: "open-ils.circ",
      method,
      params: [this.authToken, options],
    });
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
    const content = response[0] as OSRFMessage<OSRFResult<number>>;
    return {
      data: content.__p.payload.__p.content,
      error: null,
    };
  }

  /**
   * Checks in an item
   * @param options Options for checking in an item
   * @param override Whether to override any errors that occur during checkin
   * @returns A ServiceResult containing the result of the checkin operation
   */
  async checkIn(
    options: CheckInOptions,
    override: boolean = false
  ): Promise<ServiceResult<any, string>> {
    const method = override
      ? "open-ils.circ.checkin.override"
      : "open-ils.circ.checkin";

    const response = await this.adapter.send<ServiceResponse<any>>({
      service: "open-ils.circ",
      method,
      params: [this.authToken, options],
    });

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

    const content = response[0] as OSRFMessage<
      OSRFResult<CheckinResponsePayload>
    >;

    const textcode = content.__p.payload.__p.content.textcode;

    return CHECKIN_SUCCESS_CODES.includes(textcode as CheckinSuccessTextCode)
      ? {
          data: textcode,
          error: null,
        }
      : {
          data: null,
          error: textcode,
        };
  }

  /**
   * Marks an item with a specific status
   * @param copyId The ID of the copy to mark
   * @param status The status to mark the item with
   * @param options Additional options for the mark operation
   * @returns A ServiceResult indicating success or failure
   */
  async markItem(
    copyId: number,
    status: ManualItemStatus,
    options: MarkItemOptions = {}
  ): Promise<ServiceResult<boolean, string>> {
    const method = `open-ils.circ.mark_item_${status}`;

    const response = await this.adapter.send<ServiceResponse<any>>({
      service: "open-ils.circ",
      method,
      params: [this.authToken, copyId, options],
    });

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
    const result = response[0] as OSRFMessage<OSRFResult<string>>;
    return {
      data: result.__p.payload.__p.content === "1",
      error: null,
    };
  }

  /**
   * Updates inventory information for the specified items
   * @param itemIds Array of item IDs to update inventory for
   * @param wsId Optional workstation ID
   * @returns A ServiceResult containing success and failure counts
   */
  async updateItemInventory(
    itemIds: number[], 
    wsId?: number
  ): Promise<ServiceResult<{ successCount: number; failureCount: number }, string>> {
    const method = "open-ils.circ.circulation.update_copy_inventory";
    const args = {
      copy_list: itemIds,
    };
    const params = wsId ? [this.authToken, args, wsId] : [this.authToken, args];
    const response = await this.adapter.send<ServiceResponse<any>>({
      service: "open-ils.circ",
      method,
      params,
    });

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

    const data = response[0] as OSRFMessage<OSRFResult<number[]>>;
    const content = data.__p.payload.__p.content;

    return {
      data: {
        successCount: content[0],
        failureCount: content[1],
      },
      error: null,
    };
  }
}
