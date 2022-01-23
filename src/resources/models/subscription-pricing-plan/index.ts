import {
  CURRENCY,
  LOCALE,
  SUBSCRIPTION_PRICING_PLAN_INTERVAL,
  PLAN_PAYMENT_TYPE,
} from "../../../enum";
import { IBody } from "../../../interfaces";

export class CreateSubscriptionPricingPlanRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  productReferenceCode?: string;
  name: string;
  price: number;
  currencyCode: CURRENCY | string;
  paymentInterval: SUBSCRIPTION_PRICING_PLAN_INTERVAL | string;
  paymentIntervalCount: number;
  trialPeriodDays: number;
  planPaymentType: PLAN_PAYMENT_TYPE | string;
}

export class UpdateSubscriptionPricingPlanRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  name: string;
  trialPeriodDays: number;
}

export class SubscriptionPricingPlanParam implements IBody {
  pricingPlanReferenceCode?: string;
}

export class RetrieveSubscriptionPricingPlanListRequest implements IBody {
  locale?: string;
  conversationId?: string;
  productReferenceCode?: string;
  page: number;
  count: number;
}
