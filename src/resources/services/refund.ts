import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateRefundRequest } from "../models";
export class Refund {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateRefundRequest) {
    var path: string = "/payment/refund";
    return await _post(path, body, this.config);
  }
}
