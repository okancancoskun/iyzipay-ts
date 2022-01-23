import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";

export class CreateSubscriptionPaymentRetryRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  referenceCode: string;
}
