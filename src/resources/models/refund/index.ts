import { LOCALE, CURRENCY, REFUND_REASON } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateRefundRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  paymentTransactionId: string;
  price: string;
  currency: CURRENCY | string;
  ip: string;
  reason?: REFUND_REASON | string;
  description?: string;
}
