import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class CreateRefundToBalanceInitRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  paymentId: number;
  callbackUrl: string;
}
