import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateApprovalRequest } from "../models";

export class Approval {
  constructor(protected readonly config: IConfig) {}
  
  public async create(body: ICreateApprovalRequest) {
    var path = "/payment/iyzipos/installment";
    return await _post(path, body, this.config);
  }
}
