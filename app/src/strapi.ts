import Strapi from "strapi-sdk-js";

export const STRAPI_URL = "http://192.168.1.112:8001";
const strapi = new Strapi({ url: STRAPI_URL });

if (process.env.STRAPI_AUTH_TOKEN) {
  strapi.setToken(process.env.STRAPI_AUTH_TOKEN);
}

export default strapi;
