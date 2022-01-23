import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateRefundRequest } from "../models";
export class Refund {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateRefundRequest) {
    var path: string = "/payment/refund";
    return await _post(path, body, this.config);
  }
}
