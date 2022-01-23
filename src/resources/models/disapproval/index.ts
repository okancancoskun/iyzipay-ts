import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class CreateDisApprovalRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  paymentTransactionId: string;
}
