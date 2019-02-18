import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchResultsComponent } from './search-results/search-results.component';
import { FoodResultsComponent } from './food-results/food-results.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'myfoods' },
  { path: 'search', component: SearchResultsComponent },
  { path: 'search/:id', component: FoodResultsComponent },
  { path: 'myfoods', component: FoodListComponent },
  { path: 'myfoods/:id', component: FoodDetailsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'myfoods' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
