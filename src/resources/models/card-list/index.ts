import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class RetrieveCardListRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  cardUserKey: string;
}
