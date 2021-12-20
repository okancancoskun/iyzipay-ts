import { IBody } from "../../../interfaces";
import { IBillingAddress, IShippingAddress, IPaymentCard } from "..";

import {
  LOCALE,
  SUBSCRIPTION_UPGRADE_PERIOD,
  SUBSCRIPTION_STATUS,
  SUBSCRIPTION_INITIAL_STATUS,
} from "../../../enum";

interface ICustomer {
  name: string;
  surname: string;
  identityNumber: string;
  email: string;
  gsmNumber: string;
  billingAddress: IBillingAddress & { district: string };
  shippingAddress: IShippingAddress & { district: string };
}
export interface ISubscriptionParam extends IBody {
  subscriptionReferenceCode?: string;
}

export interface ICreateSubscriptionInitRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  callbackUrl: string;
  pricingPlanReferenceCode: string;
  subscriptionInitialStatus: SUBSCRIPTION_INITIAL_STATUS | string;
  paymentCard: IPaymentCard;
  customer: ICustomer;
}
export interface IUpgradeSubscriptionRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  newPricingPlanReferenceCode: string;
  upgradePeriod: SUBSCRIPTION_UPGRADE_PERIOD | string;
  useTrial: boolean;
}

export interface ISearchSubscriptionRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  page: number;
  count: number;
  subscriptionReferenceCode: string;
  parentReferenceCode: string;
  customerReferenceCode: string;
  pricingPlanReferenceCode: string;
  subscriptionStatus: SUBSCRIPTION_STATUS | string;
  startDate: string;
  endDate: string;
}
