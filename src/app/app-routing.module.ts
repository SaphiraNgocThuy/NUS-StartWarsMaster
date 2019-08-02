import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesComponent } from "./categories/categories.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ItemsComponent } from "./items/items.component";

const routes: Routes = [
  { path: "", component: CategoriesComponent },
  {
    path: "items",
    component: ItemsComponent
    // data: {"people": "https://swapi.co/api/people/",
    //   "planets": "https://swapi.co/api/planets/",
    //   "films": "https://swapi.co/api/films/",
    //   "species": "https://swapi.co/api/species/",
    //   "vehicles": "https://swapi.co/api/vehicles/",
    //   "starships": "https://swapi.co/api/starships/"}
  },
  {
    path: "item-details",
    component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
