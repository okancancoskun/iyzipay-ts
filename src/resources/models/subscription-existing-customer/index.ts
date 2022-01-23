import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class CreateSubscriptionInitExistingCustomerRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  pricingPlanReferenceCode: string;
  customerReferenceCode: string;
}
