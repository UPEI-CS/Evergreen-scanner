import { IAdapter, ServiceResponse, ServiceResult } from "../types/osrf";
import {
  PcrudOptions,
  PcrudRequestOptions,
} from "../types";
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
    const newService = new PCrudService<K>(this.adapter, this.authToken, this.idl);
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

  async select(): Promise<ServiceResult<T extends IdlClassName ? IdlClassMapping[T] : never, string>> {
    const { fmClass, ...rest } = this.currentQuery;

    const [result, status] = await this.adapter.send<ServiceResponse<any>>({
      service: "open-ils.pcrud",
      method: `open-ils.pcrud.search.${fmClass}`,
      params: [this.authToken, ...Object.values(rest)],
    });
    if (status.__p.payload.__c === "osrfMethodException") {
      return {
        data: null,
        error: status.__p.payload.__p.status
      };
    }
    if (result.__p.payload.__p.status.toLowerCase() !== "ok") {
      return {
        data: null,
        error: result.__p.payload.__p.status
      };
    }
    const content = result.__p.payload.__p.content.__p;
    return {
      data: this.idl.create<T extends IdlClassName ? IdlClassMapping[T] : never>(fmClass as any, content),
      error: null
    };
  }
}

