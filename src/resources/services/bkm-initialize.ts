import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateBkmInitializeRequest } from "../models";

export class BkmInitialize {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateBkmInitializeRequest) {
    var path = "/payment/bkm/initialize";
    return await _post(path, body, this.config);
  }
}
