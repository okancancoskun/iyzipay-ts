import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class RetrieveInstallmentInfoRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  binNumber: string;
  price: string;
}
