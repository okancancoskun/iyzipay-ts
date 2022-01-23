import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class RetrieveBkmRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  token: string;
}
