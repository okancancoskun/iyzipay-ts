import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";

interface ICard {
  cardAlias: string;
  cardHolderName: string;
  cardNumber: string;
  expireMonth: string;
  expireYear: string;
}

export class CreateCardRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  email?: string;
  externalId?: string;
  cardUserKey?: string;
  card: ICard;
}

export class DeleteCardRequest implements IBody {
  locale?: LOCALE | string;
  conversationId?: string;
  cardToken: string;
  cardUserKey: string;
}
