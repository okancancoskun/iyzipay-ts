import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateSubscriptionPaymentRetryRequest } from "../models";

export class SubscriptionPayment {
  constructor(protected readonly config: IConfig) {}

  public async retry(body: ICreateSubscriptionPaymentRetryRequest) {
    var path: string = "/v2/subscription/operation/retry";
    return await _post(path, body, this.config);
  }
}
