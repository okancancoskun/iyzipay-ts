import { _post, _delete } from "../../http";
import { IConfig } from "../../interfaces";
import { IRetrieveInstallmentInfoRequest } from "../models";

export class InstallmentInfo {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: IRetrieveInstallmentInfoRequest) {
    var path = "/payment/iyzipos/installment";
    return await _post(path, body, this.config);
  }
}
