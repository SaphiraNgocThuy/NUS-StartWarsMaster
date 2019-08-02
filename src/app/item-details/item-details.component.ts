import { Component, OnInit } from "@angular/core";
import { DataService } from "./../service/data-service.service";

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.scss"]
})
export class ItemDetailsComponent implements OnInit {
  details: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.$item.subscribe(data => {
      let keys = Object.keys(data);
      this.details = [];
      this.details = keys.map(el => {
        return {
          key: el,
          value: data[el]
        };
      });
      // keys.forEach(el => {
      //   let obj = {};
      //   obj[el] = data[el];
      //   this.details.push(obj);
      // });
      console.log(this.details);
    });
  }
}
