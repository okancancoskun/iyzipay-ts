import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  ICreateSubscriptionPricingPlanRequest,
  IUpdateSubscriptionPricingPlanRequest,
  ISubscriptionPricingPlanParam,
  IRetrieveSubscriptionPricingPlanListRequest,
} from "../models";
import { generateQueryString } from "../../hooks";

export class SubscriptionPricingPlan {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateSubscriptionPricingPlanRequest) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}/pricing-plans`;
    await delete body.productReferenceCode;
    return await _post(path, body, this.config);
  }

  public async update(
    body: IUpdateSubscriptionPricingPlanRequest & ISubscriptionPricingPlanParam
  ) {
    var path: string = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
    await delete body.pricingPlanReferenceCode;
    return await _post(path, body, this.config);
  }

  public async delete(body: ISubscriptionPricingPlanParam) {
    var path: string = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
    await delete body.pricingPlanReferenceCode;
    return await _delete(path, {}, this.config);
  }

  public async retrieveList(body: IRetrieveSubscriptionPricingPlanListRequest) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}/pricing-plans`;
    await delete body.productReferenceCode;
    path += generateQueryString(body);
    return await _get(path, this.config);
  }
  
  public async retrieve(body: ISubscriptionPricingPlanParam) {
    var path: string = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
    return await _get(path, this.config);
  }
}
