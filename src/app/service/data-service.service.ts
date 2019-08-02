import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  // $categories: Subject<any> = new Subject<any>();
  $item: Subject<any> = new Subject<any>();
  constructor() {}
}
