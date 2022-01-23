import { _post } from "../../http";
import { IConfig } from "../../interfaces";
import { CreatePeccoInitializeRequest } from "../models";

export class PeccoInitialize {
  constructor(protected readonly config: IConfig) {}

  public async create(body: CreatePeccoInitializeRequest) {
    var path = "/payment/pecco/initialize";
    return await _post(path, body, this.config);
  }
}
