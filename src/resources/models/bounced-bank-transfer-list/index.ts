import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface IRetrieveBouncedBankRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  date: string;
}
