import { IConfig, IBody } from "../interfaces";
import { RESOURCE } from "../enum";
import {
  generateAuthorizationHeader,
  generateAuthorizationHeaderV2,
  generateRandomString,
  generateRequestString,
} from ".";

export const generateHttpHeaders = (
  path: string,
  body: IBody = {},
  config: IConfig
) => {
  const v2AuthUrlRegex = new RegExp(/\/v2\//);
  const randomString = generateRandomString(8);
  var headers = {
    Authorization: v2AuthUrlRegex.test(path)
      ? generateAuthorizationHeaderV2(
          RESOURCE.IYZI_WS_HEADER_NAME_V2,
          config.apiKey,
          RESOURCE.SEPARATOR,
          config.secretKey,
          path,
          body,
          randomString
        )
      : generateAuthorizationHeader(
          RESOURCE.IYZI_WS_HEADER_NAME,
          config.apiKey,
          RESOURCE.SEPARATOR,
          config.secretKey,
          generateRequestString(body),
          randomString
        ),
    "x-iyzi-rnd": randomString,
    "x-iyzi-client-version": "iyzipay-node-2.0.48",
    "Content-Type": "application/json",
    Connection: "keep-alive",
  };
  return headers;
};
