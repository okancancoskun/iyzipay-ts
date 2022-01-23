import { _post, _put } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateApmInitializeRequest, RetrieveApmRequest } from "../models";

export class Apm {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateApmInitializeRequest) {
    var path: string = "/payment/apm/initialize";
    return await _post(path, body, this.config);
  }

  public async retrieve(body: RetrieveApmRequest) {
    var path: string = "/payment/apm/retrieve";
    return await _post(path, body, this.config);
  }
}
