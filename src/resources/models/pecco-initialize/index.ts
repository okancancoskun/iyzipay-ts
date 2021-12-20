import { IBillingAddress, IBuyer, IShippingAddress } from "..";
import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";
interface IPeccoBasketItem {
  id: string;
  name: string;
  category1: string;
  category2: string;
  itemType: string;
  price: string;
}
export interface ICreatePeccoInitializeRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  price: string;
  paidPrice: string;
  currency: string;
  basketId: string;
  paymentGroup: string;
  callbackUrl: string;
  buyer: IBuyer;
  shippingAddress: IShippingAddress;
  billingAddress: IBillingAddress;
  basketItems: IPeccoBasketItem[];
}
