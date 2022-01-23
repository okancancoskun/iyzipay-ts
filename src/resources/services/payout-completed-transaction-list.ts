import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { RetrievePayoutCompletedTransactionRequest } from "../models";

export class PayoutCompletedTransactionList {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: RetrievePayoutCompletedTransactionRequest) {
    var path = "/reporting/settlement/payoutcompleted";
    return await _post(path, body, this.config);
  }
}
