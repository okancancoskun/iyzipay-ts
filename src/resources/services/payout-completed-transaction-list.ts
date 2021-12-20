import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { IRetrievePayoutCompletedTransactionRequest } from "../models";

export class PayoutCompletedTransactionList {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: IRetrievePayoutCompletedTransactionRequest) {
    var path = "/reporting/settlement/payoutcompleted";
    return await _post(path, body, this.config);
  }
}
