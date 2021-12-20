import {
  CURRENCY,
  LOCALE,
  SUBSCRIPTION_PRICING_PLAN_INTERVAL,
  PLAN_PAYMENT_TYPE,
} from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateSubscriptionPricingPlanRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  productReferenceCode?: string;
  name: string;
  price: number;
  currencyCode: CURRENCY | string;
  paymentInterval: SUBSCRIPTION_PRICING_PLAN_INTERVAL | string;
  paymentIntervalCount: number;
  trialPeriodDays: number;
  planPaymentType: PLAN_PAYMENT_TYPE | string;
}

export interface IUpdateSubscriptionPricingPlanRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  name: string;
  trialPeriodDays: number;
}

export interface ISubscriptionPricingPlanParam extends IBody {
  pricingPlanReferenceCode?: string;
}

export interface IRetrieveSubscriptionPricingPlanListRequest extends IBody {
  locale: string;
  conversationId: string;
  productReferenceCode?: string;
  page: number;
  count: number;
}
