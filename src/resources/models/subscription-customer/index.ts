import { IBody } from "src/interfaces";
import { IBillingAddress, IShippingAddress } from "..";
import { LOCALE } from "../../../enum";

export interface ICreateSubscriptionCustomerRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  name: string;
  surname: string;
  identityNumber: string;
  email: string;
  gsmNumber: string;
  billingAddress: IBillingAddress & { district: string };
  shippingAddress: IShippingAddress & { district: string };
}

export interface ISubscriptionCustomerUpdateRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  name: string;
  surname: string;
  identityNumber: string;
  email: string;
  gsmNumber: string;
  billingAddress: IBillingAddress & { district: string };
  shippingAddress: IShippingAddress & { district: string };
}

export interface IRetrieveSubscriptionCustomerListRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  page: number;
  count: number;
}

export interface ISubscriptionCustomerParam extends IBody {
  customerReferenceCode?: string;
}
