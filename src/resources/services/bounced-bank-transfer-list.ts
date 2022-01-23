import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { RetrieveBouncedBankRequest } from "../models";

export class BouncedBankTransferList {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: RetrieveBouncedBankRequest) {
    var path: string = "/reporting/settlement/payoutcompleted";
    return await _post(path, body, this.config);
  }
}
