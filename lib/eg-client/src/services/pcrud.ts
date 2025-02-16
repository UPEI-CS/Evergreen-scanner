import { IAdapter } from "../types/osrf";
import {
  PcrudOptions,
  PcrudRequestOptions,
  PcrudSearchResponse,
} from "../types";
export class PCrudService {
  private currentQuery: {
    fmClass: string;
    search?: object;
    options: PcrudOptions;
    reqOptions: PcrudRequestOptions;
  };
  constructor(private readonly adapter: IAdapter, private readonly authToken: string) {
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

  from(fmClass: string) {
    this.resetQuery();
    this.currentQuery.fmClass = fmClass;
    return this;
  }

  where(search: object) {
    this.currentQuery.search = search;
    return this;
  }

  flesh(depth: number) {
    this.currentQuery.options.flesh = depth;
    return this;
  }

  fleshFields(fields: { [key: string]: string[] }) {
    this.currentQuery.options.flesh_fields = fields;
    return this;
  }

  limit(limit: number) {
    this.currentQuery.options.limit = limit;
    return this;
  }

  offset(offset: number) {
    this.currentQuery.options.offset = offset;
    return this;
  }

    orderBy(field: string, direction: "ASC" | "DESC" = "ASC") {
    if (!this.currentQuery.options.order_by) {
      this.currentQuery.options.order_by = [];
    }
    this.currentQuery.options.order_by.push({
      class: this.currentQuery.fmClass,
      field: field,
      direction: direction,
    });
    return this;
  }

  authoritative(value: boolean = true) {
    this.currentQuery.reqOptions.authoritative = value;
    return this;
  }

  atomic(value: boolean = true) {
    this.currentQuery.reqOptions.atomic = value;
    return this;
  }

  async select(): Promise<PcrudSearchResponse<any>> {
    
    const { fmClass, ...rest } = this.currentQuery;
    return await this.adapter.send({
      service: "open-ils.pcrud",
      method: `open-ils.pcrud.search.${fmClass}`,
      params: [this.authToken, ...Object.values(rest)],
    });
  }
}
