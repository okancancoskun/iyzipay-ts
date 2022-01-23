import { _put } from "../../http";
import { IConfig } from "../../interfaces";
import { UpdateSubMerchantPaymentItemRequest } from "../models";

export class PaymentItem {
  constructor(protected readonly config: IConfig) {}

  public async update(body: UpdateSubMerchantPaymentItemRequest) {
    var path = "/payment/item";
    return await _put(path, body, this.config);
  }
}
