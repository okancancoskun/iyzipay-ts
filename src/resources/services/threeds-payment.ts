import { _post, _put } from "../../http";
import { IConfig } from "../../interfaces";
import { CreateThreedsPaymentRequest, RetrievePayment } from "../models";

export class ThreedsPayment {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreateThreedsPaymentRequest) {
    var path: string = "/payment/3dsecure/auth";
    return await _post(path, body, this.config);
  }

  public async retrieve(body: RetrievePayment) {
    var path: string = "/payment/detail";
    return await _post(path, body, this.config);
  }
}
