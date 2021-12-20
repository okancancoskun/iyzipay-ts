import { _post, _put } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateSettlementToBalanceInitRequest } from "../models";

export class SettlementToBalance {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateSettlementToBalanceInitRequest) {
    var path: string = "/payment/settlement-to-balance/init";
    return await _post(path, body, this.config);
  }
}