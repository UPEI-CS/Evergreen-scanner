import { describe, it, expect, vi } from "vitest";
import { CircService } from "../lib/eg-client/src/services/circ";
import {
  CheckInOptions,
  ManualItemStatus,
} from "../lib/eg-client/src/types/circ";

/**
 * Unit tests for the CircService class using the Vitest framework.
 *
 * This test suite verifies the behavior of core circulation-related methods
 * in the Evergreen system by mocking the adapter's `send()` method to simulate
 * different types of backend responses.
 *
 *
 * - `createInHouseUse()`: Handles successful creation, error responses, and no server response
 * - `checkIn()`: Handles success and failure cases based on `textcode` values
 * - `markItem()`: Verifies correct boolean interpretation of success/failure
 * - `updateItemInventory()`: Handles server responses with success/failure counts
 *
 * Each test ensures that method-specific server response formats are interpreted
 * correctly and that errors are surfaced clearly when the server behaves unexpectedly.
 *
 * The `mockAdapter.send()` function is used to simulate precise Evergreen responses
 * without requiring real backend interaction.
 */

describe("CircService", () => {
  const mockAdapter = {
    send: vi.fn(),
  };

  const authToken = "mock-token";
  const circService = new CircService(mockAdapter, authToken);

  it("createInHouseUse returns error on empty response", async () => {
    mockAdapter.send.mockResolvedValue([]);
    const result = await circService.createInHouseUse({
      barcode: "123",
      location: 1,
    });
    expect(result).toEqual({
      data: null,
      error: "No response from server",
    });
  });

  it("createInHouseUse returns error on single error response", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "FAILED",
            },
          },
        },
      },
    ]);
    const result = await circService.createInHouseUse({
      barcode: "123",
      location: 1,
    });
    expect(result).toEqual({
      data: null,
      error: "FAILED",
    });
  });

  it("createInHouseUse returns data on success", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: 1234,
            },
          },
        },
      },
      {
        __p: {
          status: "OK",
          statusCode: "200",
        },
      },
    ]);
    const result = await circService.createInHouseUse({
      barcode: "123",
      location: 1,
    });
    expect(result).toEqual({
      data: 1234,
      error: null,
    });
  });

  it("checkIn returns check-in success code", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: {
                textcode: "SUCCESS",
              },
            },
          },
        },
      },
      {
        __p: {
          status: "OK",
          statusCode: "200",
        },
      },
    ]);

    const result = await circService.checkIn({
      barcode: "XYZ",
      circ_lib: 1,
      checkin_workstation: 2,
    });

    expect(result).toEqual({
      data: "SUCCESS",
      error: null,
    });
  });

  it("checkIn returns error when textcode is not SUCCESS", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: {
                textcode: "FAIL",
              },
            },
          },
        },
      },
      {
        __p: {
          status: "OK",
          statusCode: "200",
        },
      },
    ]);

    const result = await circService.checkIn({
      barcode: "XYZ",
      circ_lib: 1,
      checkin_workstation: 2,
    });

    expect(result).toEqual({
      data: null,
      error: "FAIL",
    });
  });

  it("markItem returns true when response is 1", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: "1",
            },
          },
        },
      },
      {
        __p: {
          status: "OK",
          statusCode: "200",
        },
      },
    ]);
    const result = await circService.markItem(
      123,
      "missing" as ManualItemStatus
    );
    expect(result).toEqual({
      data: true,
      error: null,
    });
  });

  it("markItem returns false when response is not 1", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: "0",
            },
          },
        },
      },
      {
        __p: {
          status: "OK",
          statusCode: "200",
        },
      },
    ]);
    const result = await circService.markItem(
      123,
      "missing" as ManualItemStatus
    );
    expect(result).toEqual({
      data: false,
      error: null,
    });
  });

  it("updateItemInventory returns success and failure counts", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: [5, 2],
            },
          },
        },
      },
      {
        __p: {
          status: "OK",
          statusCode: "200",
        },
      },
    ]);

    const result = await circService.updateItemInventory([1001, 1002]);
    expect(result).toEqual({
      data: {
        successCount: 5,
        failureCount: 2,
      },
      error: null,
    });
  });
  it("checkIn returns error when response is empty", async () => {
    mockAdapter.send.mockResolvedValue([]);

    const result = await circService.checkIn({
      barcode: "XYZ",
      circ_lib: 1,
      checkin_workstation: 2,
    });

    expect(result).toEqual({
      data: null,
      error: "No response from server",
    });
  });
  it("checkIn returns error on single error response", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "CHECKIN_FAILED",
            },
          },
        },
      },
    ]);

    const result = await circService.checkIn({
      barcode: "XYZ",
      circ_lib: 1,
      checkin_workstation: 2,
    });

    expect(result).toEqual({
      data: null,
      error: "CHECKIN_FAILED",
    });
  });
  it("markItem returns error when response is empty", async () => {
    mockAdapter.send.mockResolvedValue([]);

    const result = await circService.markItem(
      123,
      "missing" as ManualItemStatus
    );

    expect(result).toEqual({
      data: null,
      error: "No response from server",
    });
  });
  it("markItem returns error on single error response", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "MARK_FAILED",
            },
          },
        },
      },
    ]);

    const result = await circService.markItem(
      123,
      "missing" as ManualItemStatus
    );

    expect(result).toEqual({
      data: null,
      error: "MARK_FAILED",
    });
  });
  it("updateItemInventory returns error on empty response", async () => {
    mockAdapter.send.mockResolvedValue([]);

    const result = await circService.updateItemInventory([1, 2]);

    expect(result).toEqual({
      data: null,
      error: "No response from server",
    });
  });
  it("updateItemInventory returns error on single error response", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "INVENTORY_FAILED",
            },
          },
        },
      },
    ]);

    const result = await circService.updateItemInventory([1, 2]);

    expect(result).toEqual({
      data: null,
      error: "INVENTORY_FAILED",
    });
  });
  it("createInHouseUse calls non_cat_in_house_use method when non_cat_type is set", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: 5678,
            },
          },
        },
      },
      {
        __p: {
          status: "OK",
          statusCode: "200",
        },
      },
    ]);

    const result = await circService.createInHouseUse({
      barcode: "123",
      location: 1,
      non_cat_type: 99,
    });

    expect(mockAdapter.send).toHaveBeenCalledWith(
      expect.objectContaining({
        method: "open-ils.circ.non_cat_in_house_use.create",
      })
    );

    expect(result).toEqual({
      data: 5678,
      error: null,
    });
  });
});
