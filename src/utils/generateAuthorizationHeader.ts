import { generateHash } from "./generateHash";

export const generateAuthorizationHeader = (
  iyziWsHeaderName: string,
  apiKey: string,
  separator: string,
  secretKey: string,
  body: string,
  randomString: string
): string => {
  return (
    iyziWsHeaderName +
    " " +
    apiKey +
    separator +
    generateHash(apiKey, randomString, secretKey, body)
  );
};
