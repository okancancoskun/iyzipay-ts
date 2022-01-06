import { IConfig } from "./interfaces";
import {
  Payment,
  ApiTest,
  Apm,
  Approval,
  BinNumber,
  Bkm,
  BkmInitialize,
  BouncedBankTransferList,
  Cancel,
  Card,
  CardList,
  CheckoutForm,
  CheckoutFormInitialize,
  Disapproval,
  InstallmentInfo,
  PaymentItem,
  PayoutCompletedTransactionList,
  PeccoInitialize,
  PeccoPayment,
  Refund,
  RefundToBalance,
  SettlementToBalance,
  SubMerchant,
  Subscription,
  SubscriptionCard,
  SubscriptionCheckoutForm,
  SubscriptionCustomer,
  SubscriptionExistingCustomer,
  SubscriptionPayment,
  SubscriptionPricingPlan,
  SubscriptionProduct,
  ThreedsInitialize,
  ThreedsPayment,
  UniversalCardStorageInitialize,
} from "./resources/services";
export * from "./enum";
export * from "./resources/services";

class Iyzipay {
  public payment: Payment;
  public apiTest: ApiTest;
  public apm: Apm;
  public approval: Approval;
  public binNumber: BinNumber;
  public bkm: Bkm;
  public bkmInitialize: BkmInitialize;
  public bouncedBankTransferList: BouncedBankTransferList;
  public cancel: Cancel;
  public card: Card;
  public cardList: CardList;
  public checkoutForm: CheckoutForm;
  public checkoutFormInitialize: CheckoutFormInitialize;
  public disapproval: Disapproval;
  public installmentInfo: InstallmentInfo;
  public paymentItem: PaymentItem;
  public payoutCompletedTransactionList: PayoutCompletedTransactionList;
  public peccoInitialize: PeccoInitialize;
  public peccoPayment: PeccoPayment;
  public refund: Refund;
  public refundToBalance: RefundToBalance;
  public settlementToBalance: SettlementToBalance;
  public subMerchant: SubMerchant;
  public subscription: Subscription;
  public subscriptionCard: SubscriptionCard;
  public subscriptionCheckoutForm: SubscriptionCheckoutForm;
  public subscriptionCustomer: SubscriptionCustomer;
  public subscriptionExistingCustomer: SubscriptionExistingCustomer;
  public subscriptionPayment: SubscriptionPayment;
  public subscriptionPricingPlan: SubscriptionPricingPlan;
  public subscriptionProduct: SubscriptionProduct;
  public threedsInitialize: ThreedsInitialize;
  public threedsPayment: ThreedsPayment;
  public universalCardStorageInitialize: UniversalCardStorageInitialize;

  constructor(protected readonly config: IConfig) {
    this.payment = new Payment(config);
    this.apiTest = new ApiTest(config);
    this.apm = new Apm(config);
    this.approval = new Approval(config);
    this.binNumber = new BinNumber(config);
    this.bkm = new Bkm(config);
    this.bkmInitialize = new BkmInitialize(config);
    this.bouncedBankTransferList = new BouncedBankTransferList(config);
    this.cancel = new Cancel(config);
    this.card = new Card(config);
    this.cardList = new CardList(config);
    this.checkoutForm = new CheckoutForm(config);
    this.checkoutFormInitialize = new CheckoutFormInitialize(config);
    this.disapproval = new Disapproval(config);
    this.installmentInfo = new InstallmentInfo(config);
    this.paymentItem = new PaymentItem(config);
    this.payoutCompletedTransactionList = new PayoutCompletedTransactionList(
      config
    );
    this.peccoInitialize = new PeccoInitialize(config);
    this.peccoPayment = new PeccoPayment(config);
    this.refund = new Refund(config);
    this.refundToBalance = new RefundToBalance(config);
    this.settlementToBalance = new SettlementToBalance(config);
    this.subMerchant = new SubMerchant(config);
    this.subscription = new Subscription(config);
    this.subscriptionCard = new SubscriptionCard(config);
    this.subscriptionCustomer = new SubscriptionCustomer(config);
    this.subscriptionPayment = new SubscriptionPayment(config);
    this.subscriptionPricingPlan = new SubscriptionPricingPlan(config);
    this.subscriptionProduct = new SubscriptionProduct(config);
    this.threedsInitialize = new ThreedsInitialize(config);
    this.threedsPayment = new ThreedsPayment(config);
    this.universalCardStorageInitialize = new UniversalCardStorageInitialize(
      config
    );
  }
}

export default Iyzipay;
