import { LOCALE, REFUND_REASON } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateCancelRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  paymentId: string;
  ip: string;
  reason?: REFUND_REASON | string;
  description?: string;
}
