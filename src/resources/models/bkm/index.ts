import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface IRetrieveBkmRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  token: string;
}
