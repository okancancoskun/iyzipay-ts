import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface IRetrievePayoutCompletedTransactionRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  date: string;
}
