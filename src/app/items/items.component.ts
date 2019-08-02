import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Object;

  constructor(
    private _http: HttpService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = this.route.data.subscribe(v => console.log(v))
    // this._http.getItems().subscribe(data => {
    //   this.items = Object.keys(data);
    //   console.log(this.items)
    // });
  }

}
