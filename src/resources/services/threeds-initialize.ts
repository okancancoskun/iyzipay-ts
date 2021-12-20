import { _post, _put } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreate3DsInitializeRequest } from "../models";

export class ThreedsInitialize {
  constructor(protected readonly config: IConfig) {}

  public async create(body: ICreate3DsInitializeRequest) {
    var path: string = "/payment/3dsecure/initialize";
    return await _post(path, body, this.config);
  }
}
