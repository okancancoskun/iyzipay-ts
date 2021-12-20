import { createHmac } from "crypto";
import { IBody } from "../interfaces";

export const generateHashV2 = (
  apiKey: string,
  separator: string,
  uri: string,
  randomString: string,
  secretKey: string,
  body: IBody = {}
) => {
  var signature = createHmac("sha256", secretKey)
    .update(randomString + uri + JSON.stringify(body))
    .digest("hex");
  var authParams = [
    "apiKey" + separator + apiKey,
    "randomKey" + separator + randomString,
    "signature" + separator + signature,
  ];
  return Buffer.from(authParams.join("&")).toString("base64");
  /* return new Buffer(authParams.join("&")).toString("base64"); */
};
