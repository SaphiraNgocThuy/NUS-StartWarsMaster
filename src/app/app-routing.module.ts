import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  { path: '', component: CategoriesComponent },
  { path: 'items', component: ItemsComponent, 
    data: {"people": "https://swapi.co/api/people/", 
      "planets": "https://swapi.co/api/planets/", 
      "films": "https://swapi.co/api/films/", 
      "species": "https://swapi.co/api/species/",
      "vehicles": "https://swapi.co/api/vehicles/",
      "starships": "https://swapi.co/api/starships/"} 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
