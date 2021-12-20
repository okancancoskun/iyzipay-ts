import { _post, _put } from "../../http";
import { IConfig } from "../../interfaces";
import {
  ICreateSubMerchantRequest,
  IUpdateSubMerchantRequest,
  IRetrieveSubMerchantRequest,
} from "../models";

export class SubMerchant {
  constructor(protected readonly config: IConfig) {}

  private path: string = "/onboarding/submerchant";
  public async create(body: ICreateSubMerchantRequest) {
    return await _post(this.path, body, this.config);
  }

  public async update(body: IUpdateSubMerchantRequest) {
    return await _put(this.path, body, this.config);
  }

  public async retrieve(body: IRetrieveSubMerchantRequest) {
    this.path += "/detail";
    return await _post(this.path, body, this.config);
  }
}
