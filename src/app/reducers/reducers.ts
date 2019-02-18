import { Food } from '../models/Food';
import { SearchResult } from '../models/SearchResult';

import * as FoodActions from '../actions/actions';

export interface State {
  loading: boolean;
  searchTerms: string;
  results: SearchResult[];
  selectedFood: Food;
  foodList: Food[];
  basket: Food[];
};

const initialState: State = {
  loading: false,
  searchTerms: '',
  results: [],
  selectedFood: null,
  foodList: [],
  basket: null
}

export function reducer(state = initialState, action: FoodActions.Actions): State {
  switch (action.type) {
    case FoodActions.SEARCH: {
      return {
        ...state,
        loading: true,
        searchTerms: action.payload
      }
    }

    case FoodActions.SEARCH_DONE: {
      return {
        ...state,
        loading: false,
        results: action.payload
      }
    }

    case FoodActions.FETCH_FOOD: {
      return {
        ...state,
        loading: true
      }
    }

    case FoodActions.FETCH_FOOD_DONE: {
      return {
        ...state,
        loading: false,
        selectedFood: action.payload
      }
    }

    case FoodActions.ADD_FOOD: {
      return {
        ...state,
        foodList: [
          ...state.foodList,
          state.selectedFood
        ]
      }
    }

    case FoodActions.GET_FOOD: {
      return {
        ...state,
        selectedFood: state.foodList[action.payload]
      }
    }

    case FoodActions.REMOVE_FOOD: {
      return {
        ...state,
        basket: state.foodList.filter(food => food.id !== action.payload.id)
      }
    }

    default:
      return state;
  }
}
