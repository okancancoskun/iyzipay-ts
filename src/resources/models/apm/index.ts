import {
  CURRENCY,
  LOCALE,
  PAYMENT_CHANNEL,
  PAYMENT_GROUP,
} from "../../../enum";
import { IBillingAddress, IBuyer, IShippingAddress, IBasketItems } from "..";
import { IBody } from "../../../interfaces";

export interface ICreateApmInitializeRequest {
  locale: LOCALE | string;
  conversationId: string;
  price: string;
  paidPrice: string;
  currency: CURRENCY | string;
  countryCode: string;
  paymentChannel: PAYMENT_CHANNEL | string;
  paymentGroup: PAYMENT_GROUP | String;
  accountHolderName: string;
  merchantNotificationUrl: string;
  merchantCallbackUrl: string;
  merchantErrorUrl: string;
  apmType: string;
  buyer: IBuyer;
  shippingAddress: IShippingAddress;
  billingAddress: IBillingAddress;
  basketItems: Array<Omit<IBasketItems, "subMerchantKey" | "subMerchantPrice">>;
}

export interface IRetrieveApmRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  paymentId: string;
}
