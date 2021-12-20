import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateDisApprovalRequest } from "../models";

export class Disapproval {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreateDisApprovalRequest) {
    var path = "/payment/iyzipos/item/disapprove";
    return await _post(path, body, this.config);
  }
}
