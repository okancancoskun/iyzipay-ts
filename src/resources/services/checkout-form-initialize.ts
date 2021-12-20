import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateCheckoutFormInitializeRequest } from "../models";

export class CheckoutFormInitialize {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateCheckoutFormInitializeRequest) {
    var path = "/payment/iyzipos/checkoutform/initialize/auth/ecom";
    return await _post(path, body, this.config);
  }
}
