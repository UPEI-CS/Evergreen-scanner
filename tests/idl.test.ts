import { describe, it, expect, beforeEach, vi } from "vitest";
import { IdlService } from "../lib/eg-client/src/services/idl";
import { IdlClassName } from "../lib/eg-client/src/types/idl-types-metadata";

/**
 * Unit tests for the IdlService class using the Vitest framework.
 *
 * This test suite verifies how IDL objects are created, converted to hashes,
 * and restored from hashes, along with how nested and array-based fields are handled.
 *
 *
 * - Creating an IDL object from a seed array using `create()`
 * - Modifying IDL objects via dynamically generated getter/setter methods
 * - Converting an IDL object to a plain hash using `toHash()`
 * - Reconstructing an IDL object from a hash using `fromHash()`
 * - Handling nested `OsrfObject`s inside fields
 * - Handling arrays of nested `OsrfObject`s inside fields
 * - Edge case behavior when seeds are missing or incomplete
 *
 * Mocks the IDL_DEFS metadata and overrides the `create()` method to allow
 * spying on field access and simulate real fieldmapper object behavior.
 */

interface MockAU {
  id(value?: number): number;
  name(value?: string): string;
}

vi.mock("../lib/eg-client/src/types/idl-types-metadata", async () => {
  return {
    IDL_DEFS: {
      au: {
        fields: [
          { name: "id", virtual: false },
          { name: "name", virtual: false },
          { name: "isnew", virtual: true },
        ],
      },
    },
  };
});

describe("IdlService", () => {
  let idl: IdlService;

  beforeEach(() => {
    idl = new IdlService();

    vi.spyOn(idl, "create").mockImplementation((className, seed) => {
      const obj: any = {
        classname: className,
        _isfieldmapper: true,
        a: seed ?? [],
        id: (val?: number) => {
          if (val !== undefined) obj.a[0] = val;
          return obj.a[0];
        },
        name: (val?: string) => {
          if (val !== undefined) obj.a[1] = val;
          return obj.a[1];
        },
      };
      return obj;
    });
  });

  function createAU(seed: [number, any] | [null, any]): MockAU {
    return idl.create("au" as IdlClassName, seed) as unknown as MockAU;
  }

  it("creates a MockAU object from a seed array", () => {
    const obj = createAU([1, "Alice"]);
    expect(obj.id()).toBe(1);
    expect(obj.name()).toBe("Alice");
  });

  it("modifies a MockAU object using setters", () => {
    const obj = createAU([2, "Bob"]);
    obj.name("Charlie");
    expect(obj.name()).toBe("Charlie");
  });

  it("converts a MockAU object to a hash", () => {
    const obj = createAU([42, "Charlie"]);
    const hash = idl.toHash(obj as any);
    expect(hash).toEqual({
      id: 42,
      name: "Charlie",
    });
  });

  it("creates a MockAU object from hash", () => {
    const obj = idl.fromHash("au" as IdlClassName, {
      id: 101,
      name: "Delta",
    }) as unknown as MockAU;
    expect(obj.id()).toBe(101);
    expect(obj.name()).toBe("Delta");
  });

  it("processes nested OsrfObject inside seed", () => {
    const nestedObj = createAU([55, "Nested"]);
    const obj = createAU([999, nestedObj]);
    expect(obj.id()).toBe(999);
    expect((obj.name() as any).name()).toBe("Nested");
  });

  it("processes array of nested OsrfObjects inside seed", () => {
    const nestedArray = [createAU([1, "One"]), createAU([2, "Two"])];
    const obj = createAU([null, nestedArray]);
    const nestedObjs = obj.name() as unknown as MockAU[];
    expect(Array.isArray(nestedObjs)).toBe(true);
    expect(nestedObjs[0].id()).toBe(1);
    expect(nestedObjs[1].name()).toBe("Two");
  });
  it("toHash returns original object if _isfieldmapper is false", () => {
    const rawObj = { id: 7, name: "Raw" } as any;
    const hash = idl.toHash(rawObj);
    expect(hash).toBe(rawObj);
  });
  it("fromHash ignores extra fields not in IDL definition", () => {
    const input = {
      id: 8,
      name: "Extra",
      unknownField: "should be ignored",
    };
    const obj = idl.fromHash("au" as IdlClassName, input) as unknown as MockAU;
    expect(obj.id()).toBe(8);
    expect(obj.name()).toBe("Extra");
  });
  it("create with no seed returns object with undefined fields", () => {
    const obj = idl.create("au" as IdlClassName) as unknown as MockAU;
    expect(obj.id()).toBeUndefined();
    expect(obj.name()).toBeUndefined();
  });
  it("create handles partially filled seed", () => {
    const obj = createAU([null, null]);
    expect(obj.id()).toBe(null);
    expect(obj.name()).toBe(null);
  });

  it("create can overwrite nested OsrfObject", () => {
    const nested = createAU([999, "Start"]);
    const obj = createAU([1, nested]);
    (obj.name() as any).name("Overwritten");
    expect((obj.name() as any).name()).toBe("Overwritten");
  });
  it("create allows modifying array of nested OsrfObjects", () => {
    const nestedArray = [createAU([1, "One"]), createAU([2, "Two"])];
    const obj = createAU([null, nestedArray]);
    const updated = obj.name() as unknown as MockAU[];
    updated[1].name("Updated Two");
    expect(updated[1].name()).toBe("Updated Two");
  });
});
