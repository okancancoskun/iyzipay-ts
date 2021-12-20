import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";
export interface ICreateSubscriptionProductRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  name: string;
  description: string;
}

export interface IUpdateSubscriptionProductRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  name: string;
  description: string;
}
export interface ISubscriptionProductParam extends IBody {
  productReferenceCode?: string;
}

export interface IRetrieveSubscriptionProductListRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  page: number;
  count: number;
}
