import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";

export class UpdateSubscriptionCardRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  customerReferenceCode: string;
  callbackUrl: string;
}

export class UpdateSubscriptionCardWithSubscriptionReferenceCodeRequest
  implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  subscriptionReferenceCode: string;
  callbackUrl: string;
}
