import { IBasketItems, IBillingAddress, IBuyer, IShippingAddress } from "..";
import { LOCALE, CURRENCY, PAYMENT_GROUP } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateCheckoutFormInitializeRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  price: string;
  paidPrice: string;
  currency: CURRENCY | string;
  basketId: string;
  paymentGroup: PAYMENT_GROUP | string;
  callbackUrl: string;
  enabledInstallments: Array<number>;
  buyer: IBuyer;
  shippingAddress: IShippingAddress;
  billingAddress: IBillingAddress;
  basketItems: Array<IBasketItems>;
}
