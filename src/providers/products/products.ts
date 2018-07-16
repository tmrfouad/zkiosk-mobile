import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class ProductsProvider {
  endpoint: string = 'product'

  constructor(public api: Api) {
  }

  get(params?: any) {
    return this.api.get(this.endpoint, params);
  }

  post(body: any) {
    return this.api.post(this.endpoint, body);
  }

  put(id, body: any) {
    return this.api.put(this.endpoint + '/' + id, body);
  }

  delete(id, reqOpts?: any) {
    return this.api.delete(this.endpoint + '/' + id);
  }

  patch(body: any) {
    return this.api.patch(this.endpoint, body);
  }
}
