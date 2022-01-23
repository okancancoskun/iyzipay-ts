import { IBody } from "../../../interfaces";

export class UpdateSubMerchantPaymentItemRequest implements IBody {
  paymentTransactionId: string;
  subMerchantKey: string;
  subMerchantPrice: string;
}
