import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  UpdateSubscriptionCardRequest,
  UpdateSubscriptionCardWithSubscriptionReferenceCodeRequest,
} from "../models";
export class SubscriptionCard {
  constructor(protected readonly config: IConfig) {}

  public async update(body: UpdateSubscriptionCardRequest) {
    var path: string = "/v2/subscription/card-update/checkoutform/initialize";
    return await _post(path, body, this.config);
  }

  public async updateWithSubscriptionReferenceCode(
    body: UpdateSubscriptionCardWithSubscriptionReferenceCodeRequest
  ) {
    var path: string =
      "/v2/subscription/card-update/checkoutform/initialize/with-subscription";
    return await _post(path, body, this.config);
  }
}
