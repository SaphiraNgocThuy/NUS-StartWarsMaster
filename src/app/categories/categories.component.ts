import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Object;

  constructor(
    private _http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._http.getCategories().subscribe(data => {
      this.categories = Object.keys(data);
      console.log(this.categories)
    });
  }

  onClick(category) {
    this.router.navigate(['./items'], {
      relativeTo: this.activatedRoute,
      queryParams: {category: category}
    })
  }

}
