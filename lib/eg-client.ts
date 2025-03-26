import { HttpTranslator } from "./eg-client/src/adapters/http-translator";

const baseUrl = process.env.EG_BASE_URL || "http://localhost:80"
export const client = new HttpTranslator({
  baseUrl
})
