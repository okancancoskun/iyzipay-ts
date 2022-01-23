import { generateQueryString } from "../../utils";
import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  CreateSubscriptionProductRequest,
  UpdateSubscriptionProductRequest,
  SubscriptionProductParam,
  RetrieveSubscriptionProductListRequest,
} from "../models";

export class SubscriptionProduct {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateSubscriptionProductRequest) {
    var path: string = "/v2/subscription/products";
    return await _post(path, body, this.config);
  }

  public async update(
    body: UpdateSubscriptionProductRequest & SubscriptionProductParam
  ) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}`;
    await delete body.productReferenceCode;
    return await _post(path, body, this.config);
  }

  public async delete(body: SubscriptionProductParam) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}`;
    return await _delete(path, {}, this.config);
  }

  public async retrieve(body: SubscriptionProductParam) {
    var path: string = `/v2/subscription/products/${body.productReferenceCode}`;
    return await _get(path, this.config);
  }

  public async retrieveList(body: RetrieveSubscriptionProductListRequest) {
    var path: string = "/v2/subscription/products" + generateQueryString(body);
    return await _get(path, this.config);
  }
}
