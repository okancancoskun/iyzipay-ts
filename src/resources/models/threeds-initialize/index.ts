import { IBuyer } from "../buyer";
import { IPaymentCard } from "../payment-card";
import { IShippingAddress } from "../shipping-address";
import { IBillingAddress } from "../billing-address";
import { IBasketItems } from "../basket-items";
import { PAYMENT_CHANNEL, PAYMENT_GROUP } from "../../../enum";
import { IBody } from "../../../interfaces";
export class Create3DsInitializeRequest implements IBody {
  locale?: string;
  conversationId?: string;
  price: string;
  paidPrice: string;
  currency: string;
  installment: string;
  basketId: string;
  paymentChannel: PAYMENT_CHANNEL | string;
  paymentGroup: PAYMENT_GROUP | string;
  callbackUrl: string;
  paymentCard: IPaymentCard;
  buyer: IBuyer;
  shippingAddress: IShippingAddress;
  billingAddress: IBillingAddress;
  basketItems: IBasketItems[];
}
