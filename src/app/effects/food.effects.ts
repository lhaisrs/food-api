import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import * as FoodActions from '../actions/actions';
import { NutritionService } from '../services/nutrition.service';

@Injectable()

export class FoodEffects {
  constructor(private actions$: Actions, private nutritionService: NutritionService) { }

  @Effect()
  searchFood$: Observable<Action> = this.actions$
    .pipe(
      ofType(FoodActions.SEARCH),
      mergeMap(query => {
          return this.nutritionService.searchFood(query)
          .map(results => new FoodActions.SearchDone(results))
      })
    )

  @Effect()
  fetchFood$: Observable<Action> = this.actions$
    .pipe(
      ofType(FoodActions.FETCH_FOOD),
      mergeMap(query => {
          return this.nutritionService.fetchFood(query)
          .map(food => new FoodActions.FetchFoodDone(food))
      })
    )
}
