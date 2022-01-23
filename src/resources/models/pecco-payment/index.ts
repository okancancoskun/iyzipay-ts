import { IBody } from "../../../interfaces";
import { LOCALE } from "../../../enum";
export class CreatePeccoPaymentRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  token: string;
}
