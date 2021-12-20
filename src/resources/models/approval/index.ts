import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";

export interface ICreateApprovalRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  paymentTransactionId: string;
}
