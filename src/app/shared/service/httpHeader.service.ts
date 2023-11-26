// headers.service.ts
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

export interface HeaderPair {
  key: string;
  value: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpHeadersService {
  constructor() {}

  addHeaders(customHeaders?: HeaderPair[]): HttpHeaders {
    let headers = new HttpHeaders();

    if (localStorage.getItem('token')) {
      const token: string | any = localStorage.getItem('token');
      headers = headers.set('Authorization', `Bearer ${token}`);
    }

    headers = headers.set('locale', localStorage.getItem('locale') || 'vi');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('App-Name', 'app');

    if (customHeaders) {
      customHeaders.forEach((pair: HeaderPair) => {
        headers = headers.set(pair.key, pair.value);
      });
    }

    return headers;
  }
}
