import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateRefundToBalanceInitRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  paymentId: number;
  callbackUrl: string;
}
