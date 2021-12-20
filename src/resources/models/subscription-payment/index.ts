import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";

export interface ICreateSubscriptionPaymentRetryRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  referenceCode: string;
}
