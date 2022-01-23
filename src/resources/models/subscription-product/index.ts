import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";

export class CreateSubscriptionProductRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  name: string;
  description: string;
}

export class UpdateSubscriptionProductRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  name: string;
  description: string;
}
export class SubscriptionProductParam implements IBody {
  productReferenceCode?: string;
}

export class RetrieveSubscriptionProductListRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  page: number;
  count: number;
}
