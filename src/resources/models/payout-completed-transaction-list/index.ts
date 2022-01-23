import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class RetrievePayoutCompletedTransactionRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  date: string;
}
