import {
  IAdapter,
  OSRFConnectStatus,
  OSRFMessage,
  OSRFMethodException,
  OSRFResult,
  ServiceResponse,
  ServiceResult,
} from "../types/osrf";
import { PcrudOptions, PcrudRequestOptions } from "../types";
import { IdlService } from "./idl";
import { IdlClassMapping, IdlClassName } from "../types/generated/idl-types";

export class PCrudService<T extends IdlClassName | undefined = undefined> {
  /**
   * Stores the current query parameters being built
   */
  private currentQuery: {
    fmClass: string;
    search?: object;
    options: PcrudOptions;
    reqOptions: PcrudRequestOptions;
  };

  constructor(
    private readonly adapter: IAdapter,
    private readonly authToken: string,
    private readonly idl: IdlService
  ) {
    this.currentQuery = {
      fmClass: "",
      search: {},
      options: {},
      reqOptions: {},
    };
  }

  /**
   * Resets the current query to its initial state
   */
  private resetQuery() {
    this.currentQuery = {
      fmClass: "",
      search: {},
      options: {},
      reqOptions: {},
    };
  }

  /**
   * Specifies which Fieldmapper class to query
   * 
   * @param fmClass - The Fieldmapper class name
   * @returns A new PCrudService instance with the specified class type
   */
  from<K extends IdlClassName>(fmClass: K): PCrudService<K> {
    const newService = new PCrudService<K>(
      this.adapter,
      this.authToken,
      this.idl
    );
    newService.currentQuery.fmClass = fmClass;
    return newService;
  }

  /**
   * Sets the search criteria for the query
   * 
   * @param search - Object containing search parameters
   * @returns This service instance for method chaining
   */
  where(search: object): this {
    this.currentQuery.search = search;
    return this;
  }

  /**
   * Sets the flesh depth for retrieving linked objects
   * 
   * @param depth - How many levels of linked objects to retrieve
   * @returns This service instance for method chaining
   */
  flesh(depth: number): this {
    this.currentQuery.options.flesh = depth;
    return this;
  }

  /**
   * Specifies which fields to flesh (retrieve linked objects for)
   * 
   * @param fields - Object mapping field names to arrays of subfields
   * @returns This service instance for method chaining
   */
  fleshFields(fields: { [key: string]: string[] }): this {
    this.currentQuery.options.flesh_fields = fields;
    return this;
  }

  /**
   * Sets the maximum number of results to return
   * 
   * @param limit - Maximum number of results
   * @returns This service instance for method chaining
   */
  limit(limit: number): this {
    this.currentQuery.options.limit = limit;
    return this;
  }

  /**
   * Executes the query and returns the results
   * 
   * @param reqOpts - Optional request options
   * @returns Promise resolving to either an array of IDs (if idlist:true) or an array of objects
   */
  async select<O extends PcrudRequestOptions>(
    reqOpts?: O
  ): Promise<
    O extends { idlist: true }
      ? ServiceResult<number[], string>
      : ServiceResult<T extends IdlClassName ? IdlClassMapping[T][] : never, string>
  > {
    const { fmClass, ...rest } = this.currentQuery;
    // Determine whether to return IDs or full objects
    const methodType = reqOpts?.idlist ? "id_list" : "search";
    // Determine whether to use atomic mode (all results in one response)
    const isAtomic = reqOpts?.atomic ?? false;
    const service = "open-ils.pcrud";
    const method = isAtomic
      ? `${service}.${methodType}.${fmClass}.atomic`
      : `${service}.${methodType}.${fmClass}`;

    // Format parameters based on method type
    const params =
      methodType === "id_list"
        ? [this.authToken, rest.search, rest.options]
        : [this.authToken, ...Object.values(rest)];

    // Send the request
    const response = await this.adapter.send<ServiceResponse<any>>({
      service: service,
      method: method,
      params: params,
    });

    if (response.length === 0) {
      return {
        data: null,
        error: "No data returned from server",
      };
    }
    if (response.length === 1) {
      const message = response[0] as OSRFMessage<
        OSRFConnectStatus | OSRFMethodException
      >;
      const payload = message.__p.payload;

      return {
        data: null,
        error:
          payload.__c === "osrfConnectStatus"
            ? "no data returned"
            : payload.__p.status,
      };
    }
    const data = response.slice(0, -1) as OSRFMessage<OSRFResult>[];
    if (methodType === "id_list") {
      return {
        data: data.flatMap((item) => {
          const content = item.__p.payload.__p.content;
          return Array.isArray(content) ? content : [content];
        }) as number[],
        error: null,
      } as O extends { idlist: true }
        ? ServiceResult<number[], string>
        : ServiceResult<T extends IdlClassName ? IdlClassMapping[T][] : never, string>;
    }

    const result = data.map((item) => {
      return this.idl.create<
        T extends IdlClassName ? IdlClassMapping[T] : never
      >(fmClass as any, item.__p.payload.__p.content.__p);
    });

    const typedResult: T extends IdlClassName ? IdlClassMapping[T][] : never =
      result as any;

    return {
      data: typedResult,
      error: null,
    } as O extends { idlist: true }
      ? ServiceResult<number[], string>
      : ServiceResult<T extends IdlClassName ? IdlClassMapping[T][] : never, string>;
  }
}
