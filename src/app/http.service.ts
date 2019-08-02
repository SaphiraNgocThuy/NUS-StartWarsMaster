import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  URL = "https://swapi.co/api";
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(`${this.URL}/`);
  }

  getItems(itemType: String) {
    return this.http.get(`${this.URL}/${itemType}`).toPromise();
  }

  getItemDetails(itemType: String, id: number) {
    return this.http.get(`${this.URL}/${itemType}/id`).toPromise();
  }
}
