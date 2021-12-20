import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";

export interface IUpdateSubscriptionCardRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  customerReferenceCode: string;
  callbackUrl: string;
}

export interface IUpdateSubscriptionCardWithSubscriptionReferenceCodeRequest
  extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  subscriptionReferenceCode: string;
  callbackUrl: string;
}
