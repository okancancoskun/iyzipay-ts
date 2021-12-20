import { generateQueryString } from "../../hooks";
import { _post, _put, _delete, _get } from "../../http";
import { IConfig } from "../../interfaces";
import {
  ICreateSubscriptionCustomerRequest,
  ISubscriptionCustomerUpdateRequest,
  ISubscriptionCustomerParam,
  IRetrieveSubscriptionCustomerListRequest,
} from "../models";

export class SubscriptionCustomer {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateSubscriptionCustomerRequest) {
    var path: string = "/v2/subscription/customers";
    return await _post(path, body, this.config);
  }

  public async update(
    body: ISubscriptionCustomerUpdateRequest & ISubscriptionCustomerParam
  ) {
    var path: string = `/v2/subscription/customers/${body.customerReferenceCode}`;
    await delete body.customerReferenceCode;
    return await _post(path, body, this.config);
  }

  public async retrieve(body: ISubscriptionCustomerParam) {
    var path: string = `/v2/subscription/customers/${body.customerReferenceCode}`;
    return await _get(path, this.config);
  }

  public async retrieveList(body: IRetrieveSubscriptionCustomerListRequest) {
    var path: string = "/v2/subscription/customers" + generateQueryString(body);
    return await _get(path, this.config);
  }

}
