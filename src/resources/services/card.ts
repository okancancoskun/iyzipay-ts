import { _post, _delete } from "../../http";
import { IConfig } from "../../interfaces";
import { ICreateCardRequest, IDeleteCardRequest } from "../models";

export class Card {
  constructor(protected readonly config: IConfig) {}

  private path: string = "/cardstorage/card";

  public async create(body: ICreateCardRequest) {
    return await _post(this.path, body, this.config);
  }

  public async delete(body: IDeleteCardRequest) {
    return await _delete(this.path, body, this.config);
  }
}
