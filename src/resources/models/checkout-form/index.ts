import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface IRetrieveCheckoutFormRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  token: string;
}
