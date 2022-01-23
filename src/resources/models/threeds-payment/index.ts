import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class CreateThreedsPaymentRequest implements IBody {
  conversationId?: string;
  locale?: LOCALE | string;
  paymentId: string;
  conversationData: string;
}
