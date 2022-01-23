import { generateQueryString } from "../../utils";
import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateSubscriptionInitExistingCustomerRequest } from "../models";

export class SubscriptionExistingCustomer {
  constructor(protected readonly config: IConfig) {}

  public async initialize(
    body: CreateSubscriptionInitExistingCustomerRequest
  ) {
    var path: string = "/v2/subscription/initialize/with-customer";
    return await _post(path, body, this.config);
  }
}
