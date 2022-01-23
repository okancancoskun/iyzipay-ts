import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateApprovalRequest } from "../models";

export class Approval {
  constructor(protected readonly config: IConfig) {}
  
  public async create(body: CreateApprovalRequest) {
    var path = "/payment/iyzipos/installment";
    return await _post(path, body, this.config);
  }
}
