import { describe, it, expect, vi, beforeEach } from "vitest";
import { PCrudService } from "../lib/eg-client/src/services/pcrud";
import { IdlService } from "../lib/eg-client/src/services/idl";
import { IdlClassName } from "../lib/eg-client/src/types/generated/idl-types";
import { IAdapter } from "../lib/eg-client/src/types/osrf";

/**
 * Unit tests for the PCrudService class using the Vitest framework.
 *
 * This test suite mocks the adapter and IDL service to verify how `select()`
 * behaves in various request and response scenarios within Evergreen's pcrud API.
 *
 *
 * - Empty response from the server (no data)
 * - Error responses such as OSRF method exceptions
 * - Handling of `idlist: true` for retrieving only ID values
 * - Mapping response content into IDL objects using `idl.create()`
 * - Proper construction of method names when the `atomic` flag is set
 *
 * The adapter's `send()` method is mocked to simulate Evergreen backend
 * behavior and assert how PCrudService constructs and processes requests.
 */

describe("PCrudService", () => {
  let adapter: IAdapter;
  let idl: IdlService;
  let pcrud: PCrudService;

  beforeEach(() => {
    adapter = {
      send: vi.fn(),
    };

    idl = {
      create: vi.fn(),
      fromHash: vi.fn(),
      toHash: vi.fn(),
      getClassDef: vi.fn(),
      getPrimaryKey: vi.fn(),
    } as unknown as IdlService;

    pcrud = new PCrudService(adapter, "mock-token", idl);
  });

  it("returns error on empty response", async () => {
    (adapter.send as any).mockResolvedValue([]);
    const result = await pcrud.from("au" as IdlClassName).select();
    expect(result).toEqual({
      data: null,
      error: "No data returned from server",
    });
  });

  it("returns error on single error response", async () => {
    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __c: "osrfMethodException",
            __p: {
              status: "FAIL",
            },
          },
        },
      },
    ]);
    const result = await pcrud.from("au" as IdlClassName).select();
    expect(result).toEqual({
      data: null,
      error: "FAIL",
    });
  });

  it("returns id list when idlist is true", async () => {
    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              content: [1, 2, 3],
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

    const result = await pcrud.from("au" as IdlClassName).select({
      idlist: true,
    });

    expect(result).toEqual({
      data: [1, 2, 3],
      error: null,
    });
  });

  it("maps response to IDL objects with create", async () => {
    const mockCreatedObject = { __p: [100, "John Doe"], mapped: true };
    (idl.create as any).mockImplementation(() => mockCreatedObject);

    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              content: {
                __p: [100, "John Doe"],
              },
            },
          },
        },
      },
      { __p: { status: "OK", statusCode: "200" } }, // trailing message
    ]);

    const result = await pcrud.from("au" as IdlClassName).select();
    expect(result).toEqual({
      data: [mockCreatedObject],
      error: null,
    });
  });

  it("builds method with atomic flag", async () => {
    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              content: [1, 2, 3],
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

    await pcrud.from("au" as IdlClassName).select({
      idlist: true,
      atomic: true,
    });

    expect(adapter.send).toHaveBeenCalledWith(
      expect.objectContaining({
        method: "open-ils.pcrud.id_list.au.atomic",
      })
    );
  });
  it("returns id list with a single value instead of an array", async () => {
    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              content: 42, // not an array!
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

    const result = await pcrud
      .from("au" as IdlClassName)
      .select({ idlist: true });
    expect(result).toEqual({
      data: [42], // Should still normalize to an array
      error: null,
    });
  });
  it("maps multiple results to IDL objects", async () => {
    const mockObjects = [
      { __p: [1, "Alpha"], mapped: true },
      { __p: [2, "Beta"], mapped: true },
    ];
    (idl.create as any).mockImplementation(
      (_: any, seed: (string | number)[]) =>
        mockObjects.find((o) => o.__p[0] === seed[0])
    );

    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              content: {
                __p: [1, "Alpha"],
              },
            },
          },
        },
      },
      {
        __p: {
          payload: {
            __p: {
              content: {
                __p: [2, "Beta"],
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

    const result = await pcrud.from("au" as IdlClassName).select();
    expect(result).toEqual({
      data: mockObjects,
      error: null,
    });
  });
  it("returns 'no data returned' for OSRFConnectStatus message", async () => {
    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __c: "osrfConnectStatus",
            __p: {
              status: "NO_DATA",
            },
          },
        },
      },
    ]);

    const result = await pcrud.from("au" as IdlClassName).select();
    expect(result).toEqual({
      data: null,
      error: "no data returned",
    });
  });
  it("from() returns a new instance with separate state", async () => {
    const first = pcrud.from("au" as IdlClassName).limit(1);
    const second = pcrud.from("au" as IdlClassName); // shouldn't have limit set

    const spy = vi.spyOn(adapter, "send");

    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              content: {
                __p: [999, "Test"],
              },
            },
          },
        },
      },
      { __p: { status: "OK", statusCode: "200" } },
    ]);

    await second.select();
    const paramsUsed = spy.mock.calls[0][0].params;
    expect(paramsUsed).not.toContainEqual(
      expect.objectContaining({ limit: 1 })
    );
  });
  it("applies where, flesh, and fleshFields before select", async () => {
    (adapter.send as any).mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              content: {
                __p: [1, "FullObject"],
              },
            },
          },
        },
      },
      { __p: { status: "OK", statusCode: "200" } },
    ]);

    await pcrud
      .from("au" as IdlClassName)
      .where({ name: "John" })
      .flesh(2)
      .fleshFields({ au: ["id", "name"] })
      .select();

    expect(adapter.send).toHaveBeenCalledWith(
      expect.objectContaining({
        params: expect.arrayContaining([
          expect.any(String),
          expect.objectContaining({ name: "John" }),
          expect.objectContaining({
            flesh: 2,
            flesh_fields: { au: ["id", "name"] },
          }),
        ]),
      })
    );
  });
});
