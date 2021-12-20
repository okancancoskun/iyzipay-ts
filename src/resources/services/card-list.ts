import { _post, _delete } from "../../http";
import { IConfig } from "../../interfaces";
import { IRetrieveCardListRequest } from "../models";

export class CardList {
  constructor(protected readonly config: IConfig) {}

  public async retrieve(body: IRetrieveCardListRequest) {
    var path = "/cardstorage/cards";
    return await _post(path, body, this.config);
  }
}
