import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreatePeccoPaymentRequest } from "../models";

export class PeccoPayment {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreatePeccoPaymentRequest) {
    var path: string = "/payment/pecco/auth";
    return await _post(path, body, this.config);
  }
}
