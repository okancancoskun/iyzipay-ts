import { createHash, Hash } from "crypto";

export const generateHash = (
  apiKey: string,
  randomString: string,
  secretKey: string,
  requestString: string
): string => {
  const shaSum: Hash = createHash("sha1");
  shaSum.update(apiKey + randomString + secretKey + requestString, "utf-8");
  return shaSum.digest("base64");
};
