import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";

export class CreateApprovalRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  paymentTransactionId: string;
}
