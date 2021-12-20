import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateDisApprovalRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  paymentTransactionId: string;
}
