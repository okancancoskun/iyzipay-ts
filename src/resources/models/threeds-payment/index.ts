import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateThreedsPaymentRequest extends IBody {
  conversationId: string;
  locale: LOCALE | string;
  paymentId: string;
  conversationData: string;
}
