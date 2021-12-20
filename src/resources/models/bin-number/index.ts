import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface IRetrieveBinNumberRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  binNumber: string;
}
