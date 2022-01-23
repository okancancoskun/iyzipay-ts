import { _post } from "../../http";
import { IConfig } from "../../interfaces/IConfig";
import { CreatePaymentRequest, RetrievePayment } from "../models";

export class Payment {
  constructor(protected readonly config: IConfig) {}

  async create(body: CreatePaymentRequest) {
    var path = "/payment/auth";
    return await _post(path, body, this.config);
  }

  async retrieve(body: RetrievePayment) {
    var path = "/payment/detail";
    return await _post(path, body, this.config);
  }
}
