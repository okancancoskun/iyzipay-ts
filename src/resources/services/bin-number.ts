import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { RetrieveBinNumberRequest } from "../models";

export class BinNumber {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: RetrieveBinNumberRequest) {
    var path = "/payment/bin/check";
    return await _post(path, body, this.config);
  }
}
