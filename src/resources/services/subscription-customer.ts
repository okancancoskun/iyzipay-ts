import { generateQueryString } from "../../utils";
import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  CreateSubscriptionCustomerRequest,
  SubscriptionCustomerUpdateRequest,
  SubscriptionCustomerParam,
  RetrieveSubscriptionCustomerListRequest,
} from "../models";

export class SubscriptionCustomer {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateSubscriptionCustomerRequest) {
    var path: string = "/v2/subscription/customers";
    return await _post(path, body, this.config);
  }

  public async update(
    body: SubscriptionCustomerUpdateRequest & SubscriptionCustomerParam
  ) {
    var path: string = `/v2/subscription/customers/${body.customerReferenceCode}`;
    await delete body.customerReferenceCode;
    return await _post(path, body, this.config);
  }

  public async retrieve(body: SubscriptionCustomerParam) {
    var path: string = `/v2/subscription/customers/${body.customerReferenceCode}`;
    return await _get(path, this.config);
  }

  public async retrieveList(body: RetrieveSubscriptionCustomerListRequest) {
    var path: string = "/v2/subscription/customers" + generateQueryString(body);
    return await _get(path, this.config);
  }

}
