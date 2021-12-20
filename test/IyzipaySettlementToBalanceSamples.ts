import Iyzipay, { LOCALE } from "../src";
import config from "./data/config.json";

describe("Iyzipay Settlement to Balance API Test", function () {
  var iyzipay: Iyzipay;

  before(function (done) {
    iyzipay = new Iyzipay(config);
    done();
  });

  describe("Settlement to Balance", function () {
    it("Settlement to Balance init api test", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "1234567ewqeds89",
        subMerchantKey: "y9ILqfwR8WQ9w+m9tGyUY4NsCVU=",
        callbackUrl: "https://merchantwebsite.com",
        price: 1.2,
      };
      await iyzipay.settlementToBalance.create(request);
      done();
    });
  });
});
