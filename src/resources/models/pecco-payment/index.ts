import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";
export interface ICreatePeccoPaymentRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  token: string;
}
