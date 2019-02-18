import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Food } from '../models/Food';
import * as fromRoot from '../reducers/reducers';
import * as Actions from '../actions/actions';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-food-results',
  templateUrl: './food-results.component.html',
  styleUrls: ['./food-results.component.scss']
})
export class FoodResultsComponent implements OnInit {

  food: Observable<Food>;
  loading: Observable<Boolean>;

  constructor(private route: ActivatedRoute, private router: Router,
            private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.food = this.store.select(state => state.selectedFood);
    this.loading = this.store.select(state => state.loading);

    this.route.params
        .map(params => params.id)
        .do((id) => this.store.dispatch(new Actions.FetchFood(id)))
        .subscribe();
  }

  addToList(): void {
    this.store.dispatch(new Actions.AddFood());
    this.router.navigate(['myfoods']);
  }

}
