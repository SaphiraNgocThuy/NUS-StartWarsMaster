import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../http.service";
import { DataService } from "./../service/data-service.service";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
  categories: Object;
  data: Object;

  constructor(
    private _http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this._http.getCategories().subscribe(data => {
      // this.dataService.$categories.next(data);
      this.data = data;
      this.categories = Object.keys(data);
      console.log(this.categories);
    });
  }

  onClick(category) {
    // let route = this.router.config.find(r => r.path === "/path");
    // this.dataService.$item.next(this.data[category]);
    this.router.navigate(["./items"], {
      relativeTo: this.activatedRoute,
      queryParams: { category: category }
    });
  }
}
