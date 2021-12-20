import { LOCALE } from "../../../enum";
import { IBody } from "../../../interfaces";

interface ICard {
  cardAlias: string;
  cardHolderName: string;
  cardNumber: string;
  expireMonth: string;
  expireYear: string;
}

export interface ICreateCardRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  email?: string;
  externalId?: string;
  cardUserKey?: string;
  card: ICard;
}

export interface IDeleteCardRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  cardToken: string;
  cardUserKey: string;
}
