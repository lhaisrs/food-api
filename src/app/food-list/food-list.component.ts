import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { Food } from '../models/Food';
import * as fromRoot from '../reducers/reducers';
import * as Actions from '../actions/actions';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  foodList: Observable<Food[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.foodList = this.store.select(state => state.foodList);
    console.log("Food List", this.foodList);
  }

  removeFood(food: Food) {
    this.store.dispatch(new Actions.RemoveFood(food));
  }

}
