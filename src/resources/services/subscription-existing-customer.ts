import { generateQueryString } from "../../hooks";
import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateSubscriptionInitExistingCustomerRequest } from "../models";

export class SubscriptionExistingCustomer {
  constructor(protected readonly config: IConfig) {}

  public async initialize(
    body: ICreateSubscriptionInitExistingCustomerRequest
  ) {
    var path: string = "/v2/subscription/initialize/with-customer";
    return await _post(path, body, this.config);
  }
}
