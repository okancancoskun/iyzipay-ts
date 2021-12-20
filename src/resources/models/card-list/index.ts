import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface IRetrieveCardListRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  cardUserKey: string;
}
