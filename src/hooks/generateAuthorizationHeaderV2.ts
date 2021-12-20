import { IBody } from "../interfaces";
import { generateHashV2 } from ".";

export const generateAuthorizationHeaderV2 = (
  iyziWsHeaderName: string,
  apiKey: string,
  separator: string,
  secretKey: string,
  uri: string,
  body: IBody = {},
  randomString: string
) => {
  return (
    iyziWsHeaderName +
    " " +
    generateHashV2(apiKey, separator, uri,randomString,secretKey,body)
  );
};
