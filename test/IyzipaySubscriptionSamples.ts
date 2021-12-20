import Iyzipay, {
  CURRENCY,
  LOCALE,
  PLAN_PAYMENT_TYPE,
  SUBSCRIPTION_INITIAL_STATUS,
  SUBSCRIPTION_PRICING_PLAN_INTERVAL,
  SUBSCRIPTION_STATUS,
  SUBSCRIPTION_UPGRADE_PERIOD,
} from "../src";
import config from "./data/config.json";

describe("Iyzipay Subscription API Test", function () {
  var iyzipay: Iyzipay;

  before(function (done) {
    iyzipay = new Iyzipay(config);
    done();
  });

  describe("Subscription Product", function () {
    it("should create subscription product", async function (done) {
      var createRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        name: "test3 name",
        description: "test description",
      };

      await iyzipay.subscriptionProduct.create(createRequest);
      done();
    });

    it("should update subscription product", async function (done) {
      var updateRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        productReferenceCode: "c62ab678-27aa-4f69-bd95-a313c424e65b",
        name: "test name deneme",
        description: "test descriptionnnn",
      };

      await iyzipay.subscriptionProduct.update(updateRequest);
      done();
    });

    it("should delete subscription product", async function (done) {
      var deleteRequest = {
        productReferenceCode: "c62ab678-27aa-4f69-bd95-a313c424e65b",
      };

      await iyzipay.subscriptionProduct.delete(deleteRequest);
      done();
    });

    it("should retrieve subscription product", async function (done) {
      var retrieveRequest = {
        productReferenceCode: "4ab2cadf-8ec5-4bc7-b21e-11abbc4df707",
      };

      await iyzipay.subscriptionProduct.retrieve(retrieveRequest);
      done();
    });

    it("should retrieve subscription products list", async function (done) {
      var retrieveRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        page: 1,
        count: 10,
      };

      await iyzipay.subscriptionProduct.retrieveList(retrieveRequest);
      done();
    });
  });

  describe("Subscription Pricing Plan", function () {
    it("should create subscription pricing plan", async function (done) {
      var createRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        productReferenceCode: "4ab2cadf-8ec5-4bc7-b21e-11abbc4df707",
        name: "name",
        price: 10.99,
        currencyCode: CURRENCY.TRY,
        paymentInterval: SUBSCRIPTION_PRICING_PLAN_INTERVAL.MONTHLY,
        paymentIntervalCount: 1,
        trialPeriodDays: 30,
        planPaymentType: PLAN_PAYMENT_TYPE.RECURRING,
      };

      await iyzipay.subscriptionPricingPlan.create(createRequest);
      done();
    });

    it("should update subscription pricing plan", async function (done) {
      var updateRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        pricingPlanReferenceCode: "138e6963-a6a6-4823-8fab-202dae5b3fed",
        name: "test name",
        trialPeriodDays: 31,
      };

      await iyzipay.subscriptionPricingPlan.update(updateRequest);
      done();
    });

    it("should delete subscription pricing plan", async function (done) {
      var deleteRequest = {
        pricingPlanReferenceCode: "138e6963-a6a6-4823-8fab-202dae5b3fed",
      };

      await iyzipay.subscriptionPricingPlan.delete(deleteRequest);
      done();
    });

    it("should retrieve subscription pricing plan", async function (done) {
      var retrieveRequest = {
        pricingPlanReferenceCode: "138e6963-a6a6-4823-8fab-202dae5b3fed",
      };

      await iyzipay.subscriptionPricingPlan.retrieve(retrieveRequest);
      done();
    });

    it("should retrieve subscription pricing plan list", async function (done) {
      var retrieveRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        productReferenceCode: "4ab2cadf-8ec5-4bc7-b21e-11abbc4df707",
        page: 1,
        count: 10,
      };

      await iyzipay.subscriptionPricingPlan.retrieveList(retrieveRequest);
      done();
    });
  });

  describe("Subscription Customer", function () {
    it("should create customer", async function (done) {
      var createRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        name: "name",
        surname: "surname",
        identityNumber: "11111111111",
        email: "test12@test.com",
        gsmNumber: "+9005555555555",
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          district: "altunizade",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          district: "altunizade",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
      };

      await iyzipay.subscriptionCustomer.create(createRequest);
      done();
    });

    it("should update customer", async function (done) {
      var updateRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        customerReferenceCode: "174a6da0-a192-45ae-b84e-791c2ef4bb86",
        name: "namee",
        surname: "surnamee",
        identityNumber: "11111111111",
        email: "test@test.com",
        gsmNumber: "+9005555555555",
        billingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          district: "altunizade",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
        shippingAddress: {
          contactName: "Jane Doe",
          city: "Istanbul",
          district: "altunizade",
          country: "Turkey",
          address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
          zipCode: "34742",
        },
      };

      await iyzipay.subscriptionCustomer.update(updateRequest);
      done();
    });

    it("should retrieve customer", async function (done) {
      var retrieveRequest = {
        customerReferenceCode: "3bb6d0b5-b53c-4732-a641-6fa3f8d39c21",
      };

      await iyzipay.subscriptionCustomer.retrieve(retrieveRequest);
      done();
    });

    it("should retrieve customer list", async function (done) {
      var retrieveRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        page: 1,
        count: 10,
      };

      await iyzipay.subscriptionCustomer.retrieveList(retrieveRequest);
      done();
    });
  });

  describe("Subscription Customer Card", function () {
    it("should update customer card", async function (done) {
      var updateCardRequestWithCustomerCode = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        customerReferenceCode: "3bb6d0b5-b53c-4732-a641-6fa3f8d39c21",
        callbackUrl: "callbackUrl",
      };

      await iyzipay.subscriptionCard.update(updateCardRequestWithCustomerCode);
      done();
    });

    it("should update customer card with subscription reference code", async function (done) {
      var updateCardRequestWithSubscriptionReferenceCode = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        subscriptionReferenceCode: "cb2df850-35f1-4d5b-b45b-b17434424cd5",
        callbackUrl: "callbackUrl",
      };

      await iyzipay.subscriptionCard.updateWithSubscriptionReferenceCode(
        updateCardRequestWithSubscriptionReferenceCode
      );
      done();
    });
  });

  describe("Subscription", function () {
    it("should retry subscription", async function (done) {
      var retryRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        referenceCode: "ba562488-4956-4817-acc5-d67b6c7de0a0",
      };

      await iyzipay.subscriptionPayment.retry(retryRequest);
      done();
    });

    it("should cancel subscription", async function (done) {
      var cancelRequest = {
        subscriptionReferenceCode: "1d13523f-24a5-4151-bb78-2cfddcd52e25",
      };

      await iyzipay.subscription.cancel(cancelRequest);
      done();
    });

    it("should activate subscription", async function (done) {
      var activateRequest = {
        subscriptionReferenceCode: "1d13523f-24a5-4151-bb78-2cfddcd52e25",
      };

      await iyzipay.subscription.activate(activateRequest);
      done();
    });

    it("should upgrade subscription", async function (done) {
      var upgradeRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        subscriptionReferenceCode: "dca3e175-14c8-4b98-97de-283d692eaab2",
        newPricingPlanReferenceCode: "0377e55e-4739-489b-a6a9-130d869b6b9c",
        upgradePeriod: SUBSCRIPTION_UPGRADE_PERIOD.NEXT_PERIOD,
        useTrial: true,
      };

      await iyzipay.subscription.upgrade(upgradeRequest);
      done();
    });

    it("should retrieve subscription", async function (done) {
      var retrieveRequest = {
        subscriptionReferenceCode: "ba562488-4956-4817-acc5-d67b6c7de0a0",
      };

      await iyzipay.subscription.retrieve(retrieveRequest);
      done();
    });

    it("should search subscription", async function (done) {
      var searchRequest = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        page: 1,
        count: 10,
        subscriptionReferenceCode: "dca3e175-14c8-4b98-97de-283d692eaab2",
        parentReferenceCode: "dca3e175-14c8-4b98-97de-283d692eaab2",
        customerReferenceCode: "dca3e175-14c8-4b98-97de-283d692eaab2",
        pricingPlanReferenceCode: "dca3e175-14c8-4b98-97de-283d692eaab2",
        subscriptionStatus: SUBSCRIPTION_STATUS.ACTIVE,
        startDate: "2018-10-05 12:43:35",
        endDate: "2019-10-05 12:43:35",
      };

      await iyzipay.subscription.search(searchRequest);
      done();
    });
  });

  describe("Subscription Initialize", function () {
    it("should subscription initialize with checkout form ", async function (done) {
      var request = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        callbackUrl: "callbackUrl",
        pricingPlanReferenceCode: "138e6963-a6a6-4823-8fab-202dae5b3fed",
        subscriptionInitialStatus: SUBSCRIPTION_INITIAL_STATUS.ACTIVE,
        customer: {
          name: "name",
          surname: "surname",
          identityNumber: "11111111111",
          email: "test123@test.com",
          gsmNumber: "+9005555555555",
          billingAddress: {
            contactName: "Jane Doe",
            city: "Istanbul",
            district: "altunizade",
            country: "Turkey",
            address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
            zipCode: "34742",
          },
          shippingAddress: {
            contactName: "Jane Doe",
            city: "Istanbul",
            district: "altunizade",
            country: "Turkey",
            address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
            zipCode: "34742",
          },
        },
      };
      await iyzipay.subscriptionCheckoutForm.initialize(request);
      done();
    });

    it("should retrieve  subscription result with checkout form token", async function (done) {
      var request = {
        checkoutFormToken: "c866e6b4-0f2d-4e9c-8adb-abc4f4bfa2ad",
      };

      await iyzipay.subscriptionCheckoutForm.retrieve(request);
      done();
    });

    it("should subscription initialize", async function (done) {
      var request = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        callbackUrl: "callbackUrl",
        pricingPlanReferenceCode: "2af0eee5-22c3-40c8-91b8-7c64ccb9ab12",
        subscriptionInitialStatus: SUBSCRIPTION_INITIAL_STATUS.PENDING,
        paymentCard: {
          cardHolderName: "John Doe",
          cardNumber: "1111111111111111",
          expireYear: "24",
          expireMonth: "12",
          cvc: "999",
          registerConsumerCard: true,
        },
        customer: {
          name: "name",
          surname: "surname",
          identityNumber: "11111111111",
          email: "test123@test.com",
          gsmNumber: "+9005555555555",
          billingAddress: {
            contactName: "Jane Doe",
            city: "Istanbul",
            district: "altunizade",
            country: "Turkey",
            address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
            zipCode: "34742",
          },
          shippingAddress: {
            contactName: "Jane Doe",
            city: "Istanbul",
            district: "altunizade",
            country: "Turkey",
            address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
            zipCode: "34742",
          },
        },
      };

      await iyzipay.subscription.initialize(request);
      done();
    });

    it("should subscription initialize with ucs token", async function (done) {
      var request = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        callbackUrl: "callbackUrl",
        pricingPlanReferenceCode: "2af0eee5-22c3-40c8-91b8-7c64ccb9ab12",
        subscriptionInitialStatus: SUBSCRIPTION_INITIAL_STATUS.PENDING,
        paymentCard: {
          ucsToken: "c866e6b4-0f2d-4e9c-8adb-abc4f4bfa2ad",
          cardToken: "c866e6b4-0f2d-4e9c-8adb-abc4f4bfa2ad",
          consumerToken: "c866e6b4-0f2d-4e9c-8adb-abc4f4bfa2ad",
          registerConsumerCard: true,
        },
        customer: {
          name: "name",
          surname: "surname",
          identityNumber: "11111111111",
          email: "test123@test.com",
          gsmNumber: "+9005555555555",
          billingAddress: {
            contactName: "Jane Doe",
            city: "Istanbul",
            district: "altunizade",
            country: "Turkey",
            address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
            zipCode: "34742",
          },
          shippingAddress: {
            contactName: "Jane Doe",
            city: "Istanbul",
            district: "altunizade",
            country: "Turkey",
            address: "Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1",
            zipCode: "34742",
          },
        },
      };

      await iyzipay.subscription.initialize(request);
      done();
    });

    it("should subscription initialize with existing customer", async function (done) {
      var request = {
        locale: LOCALE.EN,
        conversationId: "123456789",
        pricingPlanReferenceCode: "ba562488-4956-4817-acc5-d67b6c7de0a0",
        customerReferenceCode: "ba562488-4956-4817-acc5-d67b6c7de0a0",
      };

      await iyzipay.subscriptionExistingCustomer.initialize(request);
      done();
    });
  });
});
