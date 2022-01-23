import { IBody, IConfig } from "../interfaces";
import https from "https";
import { generateHttpHeaders } from "../utils";

export const _get = async (path: string, config: IConfig) => {
  return new Promise((resolve, reject) => {
    var options = {
      hostname: config.uri.replace("https://", ""),
      path: path,
      method: "GET",
      port: 443,
      headers: {
        ...generateHttpHeaders(path, {}, config),
      },
    };
    var request = https.request(options, (res: any) => {
      if (res?.statusCode < 200 || res?.statusCode >= 300) {
        return reject(new Error("Status Code=" + res.statusCode));
      }
      var data = "";
      res.on("data", (chunk: Buffer) => (data += chunk));
      res.on("end", () => {
        try {
          data = JSON.parse(data);
        } catch (error) {
          reject(error);
        }
        resolve(data);
      });
    });
    request.on("error", (err) => reject(err));
    request.end();
  });
};
