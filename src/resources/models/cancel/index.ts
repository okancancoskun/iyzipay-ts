import { LOCALE, REFUND_REASON } from "../../../enum";
import { IBody } from "../../../interfaces";
export class CreateCancelRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  paymentId: string;
  ip: string;
  reason?: REFUND_REASON | string;
  description?: string;
}
