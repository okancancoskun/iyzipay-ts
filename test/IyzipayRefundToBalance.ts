import Iyzipay, { LOCALE } from "../src";
import config from "./data/config.json";
describe("Iyzipay refund to Balance API Test", function () {
  var iyzipay: Iyzipay;

  before(function (done) {
    iyzipay = new Iyzipay(config);
    done();
  });

  describe("refund to Balance", function () {
    it("refund to Balance init api test", async function (done) {
      var request = {
        locale: LOCALE.TR,
        conversationId: "123456789",
        paymentId: 700000102,
        callbackUrl: "https://merchantwebsite.com",
      };
      await iyzipay.refundToBalance.create(request);
      done();
    });
  });
});
