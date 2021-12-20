import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateUniversalCardStorageInitializeRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  gsmNumber: string;
  email: string;
}
