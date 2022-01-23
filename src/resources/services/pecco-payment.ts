import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { CreatePeccoPaymentRequest } from "../models";

export class PeccoPayment {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreatePeccoPaymentRequest) {
    var path: string = "/payment/pecco/auth";
    return await _post(path, body, this.config);
  }
}
