export interface IPaymentCard {
  cardHolderName?: string;
  cardNumber?: string;
  expireMonth?: string;
  expireYear?: string;
  cvc?: string;
  cardToken?: string;
  ucsToken?: string;
  consumerToken?: string;
  registerCard?: string;
  registerConsumerCard?: boolean;
  cardUserKey?: string;
}
