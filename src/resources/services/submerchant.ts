import { _post, _put } from "../../http";
import { IConfig } from "../../interfaces";
import {
  CreateSubMerchantRequest,
  UpdateSubMerchantRequest,
  RetrieveSubMerchantRequest,
} from "../models";

export class SubMerchant {
  constructor(protected readonly config: IConfig) {}

  private path: string = "/onboarding/submerchant";
  public async create(body: CreateSubMerchantRequest) {
    return await _post(this.path, body, this.config);
  }

  public async update(body: UpdateSubMerchantRequest) {
    return await _put(this.path, body, this.config);
  }

  public async retrieve(body: RetrieveSubMerchantRequest) {
    this.path += "/detail";
    return await _post(this.path, body, this.config);
  }
}
