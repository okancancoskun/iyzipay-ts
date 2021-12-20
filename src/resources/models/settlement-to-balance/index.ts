import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateSettlementToBalanceInitRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  subMerchantKey: string;
  callbackUrl: string;
  price: number;
}