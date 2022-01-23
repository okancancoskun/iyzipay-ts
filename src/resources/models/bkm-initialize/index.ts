import { IBasketItems } from "../basket-items";
import { IBillingAddress } from "../billing-address";
import { IBuyer } from "../buyer";
import { IShippingAddress } from "../shipping-address";
import { LOCALE, PAYMENT_GROUP } from "../../../enum";
import { IBody } from "../../../interfaces";

export class CreateBkmInitializeRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
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
