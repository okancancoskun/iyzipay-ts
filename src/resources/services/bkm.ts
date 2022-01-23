import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { RetrieveBkmRequest } from "../models";

export class Bkm {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: RetrieveBkmRequest) {
    var path = "/payment/bkm/auth/detail";
    return await _post(path, body, this.config);
  }
}
