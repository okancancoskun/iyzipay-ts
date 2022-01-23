import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateCheckoutFormInitializeRequest } from "../models";

export class CheckoutFormInitialize {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateCheckoutFormInitializeRequest) {
    var path = "/payment/iyzipos/checkoutform/initialize/auth/ecom";
    return await _post(path, body, this.config);
  }
}
