import { IBody } from "../../../interfaces";
import { IShippingAddress } from "../shipping-address";
import { IBillingAddress } from "../billing-address";
import { LOCALE } from "../../../enum";

export class CreateSubscriptionCustomerRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  name: string;
  surname: string;
  identityNumber: string;
  email: string;
  gsmNumber: string;
  billingAddress: IBillingAddress & { district?: string };
  shippingAddress: IShippingAddress & { district?: string };
}

export class SubscriptionCustomerUpdateRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  name: string;
  surname: string;
  identityNumber: string;
  email: string;
  gsmNumber: string;
  billingAddress: IBillingAddress & { district?: string };
  shippingAddress: IShippingAddress & { district?: string };
}

export class RetrieveSubscriptionCustomerListRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  page: number;
  count: number;
}

export class SubscriptionCustomerParam implements IBody {
  customerReferenceCode?: string;
}
