import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';

import { Food } from '../models/Food';
import * as fromRoot from '../reducers/reducers';
import * as Actions from '../actions/actions';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {

  food: Observable<Food>;
  loading: Observable<Boolean>;

  constructor(private route: ActivatedRoute, private router: Router,
    private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.food = this.store.select(state => state.selectedFood);
    this.loading = this.store.select(state => state.loading);

    this.route.params
        .map(params => params.id)
        .do((id) => this.store.dispatch(new Actions.GetFood(id)))
        .subscribe();
  }

  removeFromList(food: Food): void{
    this.store.dispatch(new Actions.RemoveFood(food));
    this.router.navigate(['myfoods']);
  }

}
