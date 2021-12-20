import { _post, _delete } from "../../http";
import { IConfig } from "../../interfaces";
import { IRetrieveCheckoutFormRequest } from "../models";
export class CheckoutForm {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: IRetrieveCheckoutFormRequest) {
    var path = "/payment/iyzipos/checkoutform/auth/ecom/detail";
    return await _post(path, body, this.config);
  }
}
