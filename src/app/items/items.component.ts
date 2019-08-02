import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../http.service";
import { DataService } from "./../service/data-service.service";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.scss"]
})
export class ItemsComponent implements OnInit {
  items: any;
  category: String;
  details: any;
  detailList: any;
  imgUrl: string;
  id: number;

  constructor(
    private dataService: DataService,
    private _http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    let categories;
    this.activatedRoute.queryParams.subscribe(async params => {
      this.category = params.category;
      this.id = params.id;
      const index = params.index;
      this.items = await this._http.getItems(params.category);
      this.items = this.items.results;
      console.log(this.items);
      if (this.id) {
        this.details = this.items[index];
        let keys = Object.keys(this.details);
        this.detailList = [];
        this.detailList = keys.map(el => {
          return {
            key: el,
            value: this.details[el]
          };
        });

        let imgType = this.category;
        if (imgType === "people") imgType = "characters";

        this.imgUrl = `https://starwars-visualguide.com/assets/img/${imgType}/${
          this.id
        }.jpg`;
        console.log(this.detailList);
      } else {
        this.details = null;
      }
    });
  }

  onClick(item, i) {
    console.log(item);
    let urlSplit = item.url.split("/");
    let id = urlSplit[urlSplit.length - 2];
    console.log(id[id.length - 2]);
    this.router.navigate(["./"], {
      relativeTo: this.activatedRoute,
      queryParams: { category: this.category, id: id, index: i }
    });
  }
}
