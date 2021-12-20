import { generateQueryString } from "../../hooks";
import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  ICreateSubscriptionInitRequest,
  ISubscriptionParam,
  IUpgradeSubscriptionRequest,
  ISearchSubscriptionRequest,
} from "../models";

export class Subscription {
  constructor(protected readonly config: IConfig) {}

  public async initialize(body: ICreateSubscriptionInitRequest) {
    var path: string = "/v2/subscription/initialize";
    return await _post(path, body, this.config);
  }

  public async cancel(body: ISubscriptionParam) {
    var path: string = `/v2/subscription/subscriptions/${body.subscriptionReferenceCode}/cancel`;
    await delete body.subscriptionReferenceCode;
    return await _post(path, body, this.config);
  }

  public async activate(body: ISubscriptionParam) {
    var path: string = `/v2/subscription/subscriptions/${body.subscriptionReferenceCode}/activate`;
    await delete body.subscriptionReferenceCode;
    return await _post(path, body, this.config);
  }

  public async upgrade(body: IUpgradeSubscriptionRequest & ISubscriptionParam) {
    var path: string = `/v2/subscription/subscriptions/${body.subscriptionReferenceCode}/upgrade`;
    await delete body.subscriptionReferenceCode;
    return await _post(path, body, this.config);
  }

  public async retrieve(body: ISubscriptionParam) {
    var path: string = `/v2/subscription/subscriptions/${body.subscriptionReferenceCode}`;
    return await _get(path, this.config);
  }

  public async search(body: ISearchSubscriptionRequest) {
    var path: string =
      "/v2/subscription/subscriptions" + generateQueryString(body);
    return await _get(path, this.config);
  }
}
