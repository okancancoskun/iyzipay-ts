import { IBody } from "../../../interfaces";
import { IBasketItems } from "../basket-items";
import { IBillingAddress } from "../billing-address";
import { IBuyer } from "../buyer";
import { IPaymentCard } from "../payment-card";
import { IShippingAddress } from "../shipping-address";
import { LOCALE, CURRENCY, PAYMENT_GROUP } from "../../../enum";

export class CreatePaymentRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  price: string;
  paidPrice: string;
  currency: CURRENCY | string;
  installment: string;
  basketId: string;
  paymentChannel: string;
  paymentGroup: PAYMENT_GROUP | string;
  paymentCard: IPaymentCard;
  buyer: IBuyer;
  shippingAddress: IShippingAddress;
  billingAddress: IBillingAddress;
  basketItems: IBasketItems[];
}

export class RetrievePayment implements IBody {
  locale?: string;
  conversationId?: string;
  paymentId: string;
  paymentConversationId: string;
}
