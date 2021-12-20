import { IBody } from "../../../interfaces";
import { LOCALE, SUB_MERCHANT_TYPE, CURRENCY } from "../../../enum";

export interface ICreateSubMerchantRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  subMerchantExternalId: string;
  subMerchantType: SUB_MERCHANT_TYPE | string;
  address: string;
  contactName?: string;
  contactSurname?: string;
  taxOffice?: string;
  taxNumber?: string;
  legalCompanyTitle?: string;
  email: string;
  gsmNumber: string;
  name: string;
  iban: string;
  identityNumber?: string;
  currency: CURRENCY | string;
}

export interface IUpdateSubMerchantRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  subMerchantKey: string;
  iban: string;
  address: string;
  contactName?: string;
  contactSurname?: string;
  taxOffice?: string;
  taxNumber?: string;
  legalCompanyTitle?: string;
  email: string;
  gsmNumber: string;
  name: string;
  identityNumber?: string;
  currency: CURRENCY | string;
}

export interface IRetrieveSubMerchantRequest extends IBody {
  locale: LOCALE | string;
  conversationId: string;
  subMerchantExternalId: string;
}
