import Iyzipay, {
  CURRENCY,
  LOCALE,
  PAYMENT_GROUP,
  BASKET_ITEM_TYPE,
  REFUND_REASON,
  PAYMENT_CHANNEL,
  SUB_MERCHANT_TYPE,
  APM_TYPE,
} from "../src";
import config from "./data/config.json";

describe("Iyzipay-Ts API Test", function () {
  var iyzipay: Iyzipay;
  before(function (done) {
    iyzipay = new Iyzipay(config);
    done();
  });

  describe("ApiTest", function () {
    it("should test api", async function (done) {
      await iyzipay.apiTest.retrieve();
      done();
    });
  });

  describe("Approval", function () {
    it("should approve payment item", async function (done) {
      await iyzipay.approval.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentTransactionId: "1",
      });
      done();
    });
  });

  describe("Disapproval", function () {
    it("should disapprove payment item", async function (done) {
      await iyzipay.disapproval.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentTransactionId: "1",
      });
      done();
    });
  });

  describe("BinNumber", function () {
    it("should retrieve bin", async function (done) {
      await iyzipay.binNumber.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        binNumber: "554960",
      });
      done();
    });
  });

  describe("Bkm", function () {
    it("should initialize bkm", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        price: "1",
        basketId: "B67832",
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        callbackUrl: "https://www.merchant.com/callback",
        enabledInstallments: [2, 3, 6, 9],
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
          },
        ],
      };

      await iyzipay.bkmInitialize.create(request);
      done();
    });

    it("should retrieve bkm result", async function (done) {
      await iyzipay.bkm.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        token: "token",
      });
      done();
    });
  });

  describe("Cancel", function () {
    it("should cancel payment", async function (done) {
      await iyzipay.cancel.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentId: "1",
        ip: "85.34.78.112",
      });
      done();
    });

    it("should cancel payment with reason and description", async function (done) {
      await iyzipay.cancel.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentId: "1",
        ip: "85.34.78.112",
        reason: REFUND_REASON.OTHER,
        description: "customer requested for default sample",
      });
    });
  });

  describe("Card", function () {
    it("should create user and add card", async function (done) {
      await iyzipay.card.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        email: "email@email.com",
        externalId: "external id",
        card: {
          cardAlias: "card alias",
          cardHolderName: "John Doe",
          cardNumber: "5528790000000008",
          expireMonth: "12",
          expireYear: "2030",
        },
      });
      done();
    });

    it("should create card", async function (done) {
      await iyzipay.card.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        cardUserKey: "card user key",
        card: {
          cardAlias: "card alias",
          cardHolderName: "John Doe",
          cardNumber: "5528790000000008",
          expireMonth: "12",
          expireYear: "2030",
        },
      });
      done();
    });

    it("should delete card", async function (done) {
      await iyzipay.card.delete({
        locale: LOCALE.TR,
        conversationId: "123456789",
        cardToken: "card token",
        cardUserKey: "card user key",
      });
      done();
    });

    it("should retrieve cards", async function (done) {
      await iyzipay.cardList.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        cardUserKey: "card user key",
      });
      done();
    });
  });

  describe("Checkout Form", function () {
    it("should initialize checkout form", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        price: "1",
        paidPrice: "1.2",
        currency: CURRENCY.TRY,
        basketId: "B67832",
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        callbackUrl: "https://www.merchant.com/callback",
        enabledInstallments: [2, 3, 6, 9],
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
          },
        ],
      };

      await iyzipay.checkoutFormInitialize.create(request);
      done();
    });

    it("should retrieve checkout form result", async function (done) {
      await iyzipay.checkoutForm.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        token: "token",
      });
      done();
    });
  });

  describe("Universal Card Storage", function () {
    it("should initialize universal card storage", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        gsmNumber: "+905350000000",
        email: "email@email.com",
      };

      await iyzipay.universalCardStorageInitialize.retrieve(request);
      done();
    });
  });

  describe("Installment", function () {
    it("should retrieve installments", async function (done) {
      await iyzipay.installmentInfo.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        binNumber: "554960",
        price: "100",
      });
      done();
    });
  });

  describe("Payment", function () {
    it("should create payment", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        price: "1",
        paidPrice: "1.2",
        currency: CURRENCY.TRY,
        installment: "1",
        basketId: "B67832",
        paymentChannel: PAYMENT_CHANNEL.WEB,
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        paymentCard: {
          cardHolderName: "John Doe",
          cardNumber: "5528790000000008",
          expireMonth: "12",
          expireYear: "2030",
          cvc: "123",
          registerCard: "0",
        },
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
          },
        ],
      };

      await iyzipay.payment.create(request);
      done();
    });

    it("should create marketplace payment", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        price: "1",
        paidPrice: "1.2",
        currency: CURRENCY.TRY,
        installment: "1",
        basketId: "B67832",
        paymentChannel: PAYMENT_CHANNEL.WEB,
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        paymentCard: {
          cardHolderName: "John Doe",
          cardNumber: "5528790000000008",
          expireMonth: "12",
          expireYear: "2030",
          cvc: "123",
          registerCard: "0",
        },
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
            subMerchantKey: "sub merchant key",
            subMerchantPrice: "0.27",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
            subMerchantKey: "sub merchant key",
            subMerchantPrice: "0.42",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
            subMerchantKey: "sub merchant key",
            subMerchantPrice: "0.18",
          },
        ],
      };

      await iyzipay.payment.create(request);
      done();
    });

    it("should create payment with registered card", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        price: "1",
        paidPrice: "1.2",
        currency: CURRENCY.TRY,
        installment: "1",
        basketId: "B67832",
        paymentChannel: PAYMENT_CHANNEL.WEB,
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        paymentCard: {
          cardUserKey: "card user key",
          cardToken: "card token",
        },
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
          },
        ],
      };

      await iyzipay.payment.create(request);
      done();
    });

    it("should create payment and save card as ucs", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        gsmNumber: "+905350000000",
        price: "1",
        paidPrice: "1.2",
        currency: CURRENCY.TRY,
        installment: "1",
        basketId: "B67832",
        paymentChannel: PAYMENT_CHANNEL.WEB,
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        paymentCard: {
          cardHolderName: "John Doe",
          cardNumber: "5528790000000008",
          expireMonth: "12",
          expireYear: "2030",
          cvc: "123",
          registerCard: "0",
          registerConsumerCard: true,
        },
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
          },
        ],
      };

      await iyzipay.payment.create(request);
      done();
    });

    it("should create payment with ucs registered card", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        gsmNumber: "+905350000000",
        price: "1",
        paidPrice: "1.2",
        currency: CURRENCY.TRY,
        installment: "1",
        basketId: "B67832",
        paymentChannel: PAYMENT_CHANNEL.WEB,
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        paymentCard: {
          cardToken: "card token",
          ucsToken: "ucs token",
          consumerToken: "consumer token",
          registerCard: "0",
          registerConsumerCard: false,
        },
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
          },
        ],
      };

      await iyzipay.payment.create(request);
      done();
    });

    it("should retrieve payment result", async function (done) {
      await iyzipay.payment.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentId: "1",
        paymentConversationId: "123456789",
      });
      done();
    });
  });

  describe("Payment Item", function () {
    it("should update subMerchantPrice on a single payment transaction", async function (done) {
      await iyzipay.paymentItem.update({
        paymentTransactionId: "12345678",
        subMerchantKey: "sub merchant key",
        subMerchantPrice: "18.22",
      });
      done();
    });
  });

  describe("Pecco", function () {
    it("should initialize pecco", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        price: "100000",
        paidPrice: "120000",
        currency: CURRENCY.IRR,
        basketId: "B67832",
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        callbackUrl: "https://www.merchant.com/callback",
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "30000",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "50000",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "20000",
          },
        ],
      };

      await iyzipay.peccoInitialize.create(request);
      done();
    });

    it("should create pecco payment", async function (done) {
      await iyzipay.peccoPayment.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        token: "token",
      });
      done();
    });
  });

  describe("Refund", function () {
    it("should refund", async function (done) {
      iyzipay.refund.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentTransactionId: "1",
        price: "0.5",
        currency: CURRENCY.TRY,
        ip: "85.34.78.112",
      });
      done();
    });

    it("should refund with reason and description", async function (done) {
      await iyzipay.refund.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentTransactionId: "1",
        price: "0.5",
        currency: CURRENCY.TRY,
        ip: "85.34.78.112",
        reason: REFUND_REASON.OTHER,
        description: "customer requested for default sample",
      });
      done();
    });
  });

  describe("Retrieve Transactions Sample", function () {
    it("should retrieve payout completed transactions", async function (done) {
      await iyzipay.payoutCompletedTransactionList.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        date: "2016-01-22 19:13:00",
      });
      done();
    });

    it("should retrieve bounced bank transfers", async function (done) {
      await iyzipay.bouncedBankTransferList.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        date: "2016-01-22 19:13:00",
      });
      done();
    });
  });

  describe("Sub Merchant", function () {
    it("should create personal sub merchant", async function (done) {
      await iyzipay.subMerchant.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        subMerchantExternalId: "B49224",
        subMerchantType: SUB_MERCHANT_TYPE.PERSONAL,
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        contactName: "John",
        contactSurname: "Doe",
        email: "email@submerchantemail.com",
        gsmNumber: "+905350000000",
        name: "John's market",
        iban: "TR180006200119000006672315",
        identityNumber: "31300864726",
        currency: CURRENCY.TRY,
      });
      done();
    });

    it("should create private sub merchant", async function (done) {
      iyzipay.subMerchant.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        subMerchantExternalId: "S49222",
        subMerchantType: SUB_MERCHANT_TYPE.PRIVATE_COMPANY,
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        taxOffice: "Tax office",
        legalCompanyTitle: "John Doe inc",
        email: "email@submerchantemail.com",
        gsmNumber: "+905350000000",
        name: "John's market",
        iban: "TR180006200119000006672315",
        identityNumber: "31300864726",
        currency: CURRENCY.TRY,
      });
      done();
    });

    it("should create limited company sub merchant", async function (done) {
      await iyzipay.subMerchant.create({
        locale: LOCALE.TR,
        conversationId: "123456789",
        subMerchantExternalId: "AS49224",
        subMerchantType: SUB_MERCHANT_TYPE.LIMITED_OR_JOINT_STOCK_COMPANY,
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        taxOffice: "Tax office",
        taxNumber: "9261877",
        legalCompanyTitle: "XYZ inc",
        email: "email@submerchantemail.com",
        gsmNumber: "+905350000000",
        name: "John's market",
        iban: "TR180006200119000006672315",
        currency: CURRENCY.TRY,
      });
      done();
    });

    it("should update personal sub merchant", async function (done) {
      await iyzipay.subMerchant.update({
        locale: LOCALE.TR,
        conversationId: "123456789",
        subMerchantKey: "sub merchant key",
        iban: "TR630006200027700006678204",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        contactName: "Jane",
        contactSurname: "Doe",
        email: "email@submerchantemail.com",
        gsmNumber: "+905350000000",
        name: "Jane's market",
        identityNumber: "31300864726",
        currency: CURRENCY.TRY,
      });
      done();
    });

    it("should update private sub merchant", async function (done) {
      await iyzipay.subMerchant.update({
        locale: LOCALE.TR,
        conversationId: "123456789",
        subMerchantKey: "sub merchant key",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        taxOffice: "Tax office",
        legalCompanyTitle: "Jane Doe inc",
        email: "email@submerchantemail.com",
        gsmNumber: "+905350000000",
        name: "Jane's market",
        iban: "TR180006200119000006672315",
        identityNumber: "31300864726",
        currency: CURRENCY.TRY,
      });
      done();
    });

    it("should update limited company sub merchant", async function (done) {
      await iyzipay.subMerchant.update({
        locale: LOCALE.TR,
        conversationId: "123456789",
        subMerchantKey: "sub merchant key",
        address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
        taxOffice: "Tax office",
        taxNumber: "9261877",
        legalCompanyTitle: "ABC inc",
        email: "email@submerchantemail.com",
        gsmNumber: "+905350000000",
        name: "Jane's market",
        iban: "TR180006200119000006672315",
        currency: CURRENCY.TRY,
      });
      done();
    });

    it("should retrieve sub merchant", async function (done) {
      await iyzipay.subMerchant.retrieve({
        locale: LOCALE.TR,
        conversationId: "123456789",
        subMerchantExternalId: "AS49224",
      });
      done();
    });
  });

  describe("Threeds", function () {
    it("should initialize threeds", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        price: "1",
        paidPrice: "1.2",
        currency: CURRENCY.TRY,
        installment: "1",
        basketId: "B67832",
        paymentChannel: PAYMENT_CHANNEL.WEB,
        paymentGroup: PAYMENT_GROUP.PRODUCT,
        callbackUrl: "https://www.merchant.com/callback",
        paymentCard: {
          cardHolderName: "John Doe",
          cardNumber: "5528790000000008",
          expireMonth: "12",
          expireYear: "2030",
          cvc: "123",
          registerCard: "0",
        },
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
          },
        ],
      };

      await iyzipay.threedsInitialize.create(request);
      done();
    });

    it("should create threeds payment", async function (done) {
      await iyzipay.threedsPayment.create({
        conversationId: "123456789",
        locale: LOCALE.TR,
        paymentId: "1",
        conversationData: "conversation data",
      });
      done();
    });
  });

  describe("Apm", function () {
    it("should initialize apm payment", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        price: "1",
        paidPrice: "1.2",
        currency: CURRENCY.EUR,
        countryCode: "DE",
        paymentChannel: PAYMENT_CHANNEL.WEB,
        paymentGroup: PAYMENT_GROUP.LISTING,
        accountHolderName: "Jane Doe",
        merchantNotificationUrl: "https://www.merchant.com/notification",
        merchantCallbackUrl: "https://www.merchant.com/callback",
        merchantErrorUrl: "https://www.merchant.com/error",
        apmType: APM_TYPE.SOFORT,
        buyer: {
          id: "BY789",
          name: "John",
          surname: "Doe",
          gsmNumber: "+905350000000",
          email: "email@email.com",
          identityNumber: "74300864791",
          lastLoginDate: "2015-10-05 12:43:35",
          registrationDate: "2013-04-21 15:12:09",
          registrationAddress:
            "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          ip: "85.34.78.112",
          city: "Istanbul",
          country: "Turkey",
          zipCode: "34732",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        basketItems: [
          {
            id: "BI101",
            name: "Binocular",
            category1: "Collectibles",
            category2: "Accessories",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.3",
          },
          {
            id: "BI102",
            name: "Game code",
            category1: "Game",
            category2: "Online Game Items",
            itemType: BASKET_ITEM_TYPE.VIRTUAL,
            price: "0.5",
          },
          {
            id: "BI103",
            name: "Usb",
            category1: "Electronics",
            category2: "Usb / Cable",
            itemType: BASKET_ITEM_TYPE.PHYSICAL,
            price: "0.2",
          },
        ],
      };

      await iyzipay.apm.create(request);
      done();
    });

    it("retrieve apm payment result", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentId: "1",
      };

      await iyzipay.apm.retrieve(request);
      done();
    });
  });
});
