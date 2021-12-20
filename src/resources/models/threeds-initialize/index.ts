import {
  IBuyer,
  IPaymentCard,
  IShippingAddress,
  IBillingAddress,
  IBasketItems,
} from "..";
import { PAYMENT_CHANNEL, PAYMENT_GROUP } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreate3DsInitializeRequest extends IBody {
  locale: string;
  conversationId: string;
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
