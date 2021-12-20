import { _get } from "../../http";
import { IConfig } from "../../interfaces";

export class ApiTest {
  constructor(protected readonly config: IConfig) {}

  async retrieve() {
    return await _get("/payment/test", this.config);
  }
}
