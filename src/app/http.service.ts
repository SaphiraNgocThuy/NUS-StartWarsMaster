import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get('https://swapi.co/api/')
  }

  getItems() {
    return this.http.get('');
  }
}
