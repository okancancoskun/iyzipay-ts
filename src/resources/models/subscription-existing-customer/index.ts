import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateSubscriptionInitExistingCustomerRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  pricingPlanReferenceCode: string;
  customerReferenceCode: string;
}
