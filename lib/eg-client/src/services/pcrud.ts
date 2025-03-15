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

  private resetQuery() {
    this.currentQuery = {
      fmClass: "",
      search: {},
      options: {},
      reqOptions: {},
    };
  }

  from<K extends IdlClassName>(fmClass: K): PCrudService<K> {
    const newService = new PCrudService<K>(
      this.adapter,
      this.authToken,
      this.idl
    );
    newService.currentQuery.fmClass = fmClass;
    return newService;
  }

  where(search: object): this {
    this.currentQuery.search = search;
    return this;
  }

  flesh(depth: number): this {
    this.currentQuery.options.flesh = depth;
    return this;
  }

  fleshFields(fields: { [key: string]: string[] }): this {
    this.currentQuery.options.flesh_fields = fields;
    return this;
  }

  limit(limit: number): this {
    this.currentQuery.options.limit = limit;
    return this;
  }

  async select<O extends PcrudRequestOptions>(
    reqOpts?: O
  ): Promise<
    O extends { idlist: true }
      ? ServiceResult<number[], string>
      : ServiceResult<T extends IdlClassName ? IdlClassMapping[T][] : never, string>
  > {
    const { fmClass, ...rest } = this.currentQuery;
    const methodType = reqOpts?.idlist ? "id_list" : "search";
    const isAtomic = reqOpts?.atomic ?? false;
    const service = "open-ils.pcrud";
    const method = isAtomic
      ? `${service}.${methodType}.${fmClass}.atomic`
      : `${service}.${methodType}.${fmClass}`;

    const params =
      methodType === "id_list"
        ? [this.authToken, rest.search, rest.options]
        : [this.authToken, ...Object.values(rest)];

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
    console.log(data);
    if (methodType === "id_list") {
      return {
        data: data.map((item) => item.__p.payload.__p.content) as number[],
        error: null,
      } as O extends { idlist: true }
        ? ServiceResult<number[], string>
        : ServiceResult<T extends IdlClassName ? IdlClassMapping[T][] : never, string>;
    }

    const result = data.map((item) => {
      console.log(item.__p.payload.__p.content.__p);
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
