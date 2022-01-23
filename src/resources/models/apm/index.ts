import {
  CURRENCY,
  LOCALE,
  PAYMENT_CHANNEL,
  PAYMENT_GROUP,
} from "../../../enum";
import { IBillingAddress } from "../billing-address";
import { IBuyer } from "../buyer";
import { IShippingAddress } from "../shipping-address";
import { IBasketItems } from "../basket-items";

import { IBody } from "../../../interfaces";

export class CreateApmInitializeRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
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
  basketItems: Array<IBasketItems>;
}

export class RetrieveApmRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  paymentId: string;
}
