import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class CreateUniversalCardStorageInitializeRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  gsmNumber: string;
  email: string;
}
