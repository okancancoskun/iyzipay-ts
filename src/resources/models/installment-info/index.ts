import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface IRetrieveInstallmentInfoRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  binNumber: string;
  price: string;
}
