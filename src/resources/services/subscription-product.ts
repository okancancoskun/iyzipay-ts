import { generateQueryString } from "../../hooks";
import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  ICreateSubscriptionProductRequest,
  IUpdateSubscriptionProductRequest,
  ISubscriptionProductParam,
  IRetrieveSubscriptionProductListRequest,
} from "../models";

export class SubscriptionProduct {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateSubscriptionProductRequest) {
    var path: string = "/v2/subscription/products";
    return await _post(path, body, this.config);
  }

  public async update(
    body: IUpdateSubscriptionProductRequest & ISubscriptionProductParam
  ) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}`;
    await delete body.productReferenceCode;
    return await _post(path, body, this.config);
  }

  public async delete(body: ISubscriptionProductParam) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}`;
    return await _delete(path, {}, this.config);
  }

  public async retrieve(body: ISubscriptionProductParam) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}`;
    return await _get(path, this.config);
  }

  public async retrieveList(body: IRetrieveSubscriptionProductListRequest) {
    var path: string = "/v2/subscription/products" + generateQueryString(body);
    return await _get(path, this.config);
  }
}
