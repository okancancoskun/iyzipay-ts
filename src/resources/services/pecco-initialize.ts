import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreatePeccoInitializeRequest } from "../models";

export class PeccoInitialize {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreatePeccoInitializeRequest) {
    var path = "/payment/pecco/initialize";
    return await _post(path, body, this.config);
  }
}
