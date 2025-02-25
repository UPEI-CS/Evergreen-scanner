import { HttpTranslator } from "./eg-client/src/adapters/http-translator";

const baseUrl = process.env.EG_BASE_URL

if (!baseUrl) {
  throw new Error("EG_BASE_URL is not set")
}

export const client = new HttpTranslator({
  baseUrl
})
