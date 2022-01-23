import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class RetrieveBinNumberRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  binNumber: string;
}
