import { stringify } from "querystring";

export const generateQueryString = (obj = {}): string => {
  return "?" + stringify(obj);
};
