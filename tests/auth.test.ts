import { describe, it, expect, vi } from "vitest";
import { AuthService } from "../lib/eg-client/src/services/auth";
import { IdlService } from "../lib/eg-client/src/services/idl";
import { AuthCredentials } from "../lib/eg-client/src/types";

/**
 * Unit tests for the AuthService class using the Vitest framework.
 *
 * This test suite mocks the adapter and IDL dependencies to verify the behavior
 * of the `login()` method under a variety of simulated server responses.
 *
 * Their are 9 test handled in this file
 *
 * - Handling of empty server responses (no data returned)
 * - Error responses with authentication failure status
 * - Failed logins with textcode not equal to "SUCCESS"
 * - Successful logins including provisional ones
 * - Missing fields in credentials (e.g., no username)
 * - Server responses with malformed structure (causing exceptions)
 * - Login responses with null or missing payloads
 * - Server responses missing the expected `textcode`
 *
 * Each test uses a mock version of the adapter's `send()` function
 * to simulate the Evergreen backend behavior without making real requests.
 */

describe("AuthService", () => {
  const mockAdapter = {
    send: vi.fn(),
  };

  const mockIdl: IdlService = {
    create: (type: string, data: any) => ({ ...data, type }),
  } as IdlService;

  const authService = new AuthService(mockAdapter, mockIdl);

  const credentials: AuthCredentials = {
    username: "testuser",
    password: "testpass",
    type: "staff",
  };

  it("returns error when response is empty", async () => {
    mockAdapter.send.mockResolvedValue([]);
    const result = await authService.login(credentials);
    expect(result).toEqual({
      data: null,
      error: "No response from server",
    });
  });

  it("returns error when response contains error status", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "AUTH_FAILED",
            },
          },
        },
      },
    ]);
    const result = await authService.login(credentials);
    expect(result).toEqual({
      data: null,
      error: "AUTH_FAILED",
    });
  });

  it("returns error if login fails with textcode !== SUCCESS", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: {
                textcode: "FAIL",
                desc: "Invalid credentials",
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

    const result = await authService.login(credentials);
    expect(result).toEqual({
      data: null,
      error: "Invalid credentials",
    });
  });

  it("returns login payload if login is successful", async () => {
    const expectedPayload = { authToken: "abc123" };

    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: {
                textcode: "SUCCESS",
                payload: expectedPayload,
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

    const result = await authService.login(credentials);
    expect(result).toEqual({
      data: expectedPayload,
      error: null,
    });
  });

  it("handles missing username in credentials", async () => {
    const incompleteCreds = {
      password: "testpass",
      type: "staff",
    } as unknown as AuthCredentials;

    mockAdapter.send.mockResolvedValue([]);
    const result = await authService.login(incompleteCreds);
    expect(result).toEqual({
      data: null,
      error: "No response from server",
    });
  });

  it("throws error for malformed response without expected payload structure", async () => {
    mockAdapter.send.mockResolvedValue([{ someRandomKey: "unexpected" }]);

    await expect(authService.login(credentials)).rejects.toThrow(
      "Cannot read properties of undefined (reading 'payload')"
    );
  });

  it("handles provisional login", async () => {
    const expectedPayload = {
      authtoken: "abc123",
      authtime: 3600,
      provisional: 1,
    };

    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: {
                textcode: "SUCCESS",
                payload: expectedPayload,
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

    const result = await authService.login(credentials);
    expect(result).toEqual({
      data: expectedPayload,
      error: null,
    });
  });
  it("handles successful login response with missing payload", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: {
                textcode: "SUCCESS",
                payload: null,
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

    const result = await authService.login(credentials);
    expect(result).toEqual({
      data: null,
      error: null,
    });
  });
  it("handles response with undefined textcode", async () => {
    mockAdapter.send.mockResolvedValue([
      {
        __p: {
          payload: {
            __p: {
              status: "OK",
              statusCode: "200",
              content: {
                desc: "No textcode provided",
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

    const result = await authService.login(credentials);
    expect(result).toEqual({
      data: null,
      error: "No textcode provided",
    });
  });
});
