import { _put } from "../../http";
import { IConfig } from "../../interfaces";
import { IUpdateSubMerchantPaymentItemRequest } from "../models";

export class PaymentItem {
  constructor(protected readonly config: IConfig) {}

  public async update(body: IUpdateSubMerchantPaymentItemRequest) {
    var path = "/payment/item";
    return await _put(path, body, this.config);
  }
}
