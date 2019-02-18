import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Food } from '../models/Food';
import { SearchResult } from '../models/SearchResult';

//Loading State
export const LOADING = 'Food Load';

//Search State
export const SEARCH = 'Food Search';
export const SEARCH_DONE = 'Food Search Done';

//Fetch State
export const FETCH_FOOD = 'Fetch Food';
export const FETCH_FOOD_DONE = 'Fetch Food Done';

//Add State
export const ADD_FOOD = 'Add Food';

//Get State
export const GET_FOOD = 'Get Food';

//Remove State
export const REMOVE_FOOD = 'Remove Food';

export class Search implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) {
    console.log("It's searching");
  };
}

export class SearchDone implements Action {
  readonly type = SEARCH_DONE;
  constructor(public payload: SearchResult[]) {};
}

export class FetchFood implements Action {
  readonly type = FETCH_FOOD;
  constructor(public payload: string) {};
}

export class FetchFoodDone implements Action {
  readonly type = FETCH_FOOD_DONE;
  constructor(public payload: Food) {};
}

export class AddFood implements Action {
  readonly type = ADD_FOOD;
  constructor() {};
}

export class GetFood implements Action {
  readonly type = GET_FOOD;
  constructor(public payload: string) {};
}

export class RemoveFood implements Action {
  readonly type = REMOVE_FOOD;
  constructor(public payload: Food) {};
}

export type Actions = Search | SearchDone | AddFood | RemoveFood | FetchFood | FetchFoodDone | GetFood;
