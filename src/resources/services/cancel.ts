import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateCancelRequest } from "../models";

export class Cancel {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateCancelRequest) {
    var path = "/payment/cancel";
    return await _post(path, body, this.config);
  }
}
