import { _post, _delete } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateUniversalCardStorageInitializeRequest } from "../models";
export class UniversalCardStorageInitialize {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: CreateUniversalCardStorageInitializeRequest) {
    var path = "/payment/iyzipos/checkoutform/auth/ecom/detail";
    return await _post(path, body, this.config);
  }
}
