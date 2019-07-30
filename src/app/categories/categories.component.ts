import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories)
    });
  }

}
