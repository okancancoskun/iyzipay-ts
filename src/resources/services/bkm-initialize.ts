import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateBkmInitializeRequest } from "../models";

export class BkmInitialize {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateBkmInitializeRequest) {
    var path = "/payment/bkm/initialize";
    return await _post(path, body, this.config);
  }
}
