import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  CreateSubscriptionPricingPlanRequest,
  UpdateSubscriptionPricingPlanRequest,
SubscriptionPricingPlanParam,
  RetrieveSubscriptionPricingPlanListRequest,
} from "../models";
import { generateQueryString } from "../../utils";

export class SubscriptionPricingPlan {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateSubscriptionPricingPlanRequest) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}/pricing-plans`;
    await delete body.productReferenceCode;
    return await _post(path, body, this.config);
  }

  public async update(
    body: UpdateSubscriptionPricingPlanRequest & SubscriptionPricingPlanParam
  ) {
    var path: string = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
    await delete body.pricingPlanReferenceCode;
    return await _post(path, body, this.config);
  }

  public async delete(body: SubscriptionPricingPlanParam) {
    var path: string = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
    await delete body.pricingPlanReferenceCode;
    return await _delete(path, {}, this.config);
  }

  public async retrieveList(body: RetrieveSubscriptionPricingPlanListRequest) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}/pricing-plans`;
    await delete body.productReferenceCode;
    path += generateQueryString(body);
    return await _get(path, this.config);
  }
  
  public async retrieve(body: SubscriptionPricingPlanParam) {
    var path: string = `/v2/subscription/pricing-plans/${body.pricingPlanReferenceCode}`;
    return await _get(path, this.config);
  }
}
