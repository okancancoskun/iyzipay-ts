import { IBody,IConfig } from "../interfaces";
import https from "https";
import { generateHttpHeaders } from "../hooks";

export const _put = async (path: string, body: IBody = {}, config: IConfig) => {
  return new Promise((resolve, reject) => {
    var options = {
      hostname: config.uri.replace("https://", ""),
      path: path,
      method: "PUT",
      port: 443,
      headers: {
        ...generateHttpHeaders(path, body, config),
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
    if (Object.keys(body).length > 0) {
      request.write(JSON.stringify(body));
    }
    request.end();
  });
};
