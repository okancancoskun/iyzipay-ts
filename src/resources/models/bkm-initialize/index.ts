import { IBasketItems, IBillingAddress, IBuyer, IShippingAddress } from "..";
import { LOCALE, PAYMENT_GROUP } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateBkmInitializeRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  price: string;
  basketId: string;
  paymentGroup: PAYMENT_GROUP | string;
  callbackUrl: string;
  enabledInstallments: Array<number>;
  buyer: IBuyer;
  shippingAddress: IShippingAddress;
  billingAddress: IBillingAddress;
  basketItems: Array<IBasketItems>;
}
