import { generateQueryString } from "../../utils";
import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  CreateSubscriptionCheckoutFormInitRequest,
  SubscriptionCheckoutFormParam,
} from "../models";

export class SubscriptionCheckoutForm {
  constructor(protected readonly config: IConfig) {}

  public async initialize(body: CreateSubscriptionCheckoutFormInitRequest) {
    var path: string = "/v2/subscription/checkoutform/initialize";
    return await _post(path, body, this.config);
  }

  public async retrieve(body: SubscriptionCheckoutFormParam) {
    var path: string = `/v2/subscription/checkoutform/${body.checkoutFormToken}`;
    return await _get(path, this.config);
  }
}
