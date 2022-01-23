import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export class CreateSettlementToBalanceInitRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  subMerchantKey: string;
  callbackUrl: string;
  price: number;
}
