import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateDisApprovalRequest } from "../models";

export class Disapproval {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateDisApprovalRequest) {
    var path = "/payment/iyzipos/item/disapprove";
    return await _post(path, body, this.config);
  }
}
