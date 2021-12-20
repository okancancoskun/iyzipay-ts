import { _post } from "../../http";
import { IConfig } from "../../interfaces/IConfig";
import { ICreatePaymentRequest, IRetrievePayment } from "../models";

export class Payment {
  constructor(protected readonly config: IConfig) {}

  async create(body: ICreatePaymentRequest) {
    var path = "/payment/auth";
    return await _post(path, body, this.config);
  }

  async retrieve(body: IRetrievePayment) {
    var path = "/payment/detail";
    return await _post(path, body, this.config);
  }
}
