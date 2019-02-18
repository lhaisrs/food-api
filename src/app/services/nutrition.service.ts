import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Food } from '../models/Food';
import { SearchResult } from '../models/SearchResult';

@Injectable({
  providedIn: 'root'
})
export class NutritionService {

  apiKey: string = 'wm67pNbJirOEMDMoXRnEeg0Vx0nAAKAL20yvBXdg';

  constructor(private httpClient: HttpClient) { }

  searchFood(query: string): Observable<SearchResult[]> {
    console.log("Search Food: ", query)

    const url = 'https://api.nal.usda.gov/ndb/search/?format=json&';
    const params: string = [
      `q=${query}`,
      `sort=r`,
      `max=25`,
      `offset=0`,
      `ds=Standard%20Reference`,
      `api_key=${this.apiKey}`
    ].join('&');

    const queryUrl = `${url}${params}`;

    return this.httpClient.get(queryUrl).map((response: HttpResponse<SearchResult[]>) => {
      let results: SearchResult[];
      response.body.length > 0 ? results = response.body : [];
      return results;
    });
  }

  fetchFood(query: string): Observable<Food> {
    const url = 'https://api.nal.usda.gov/ndb/nutrients/?format=json&';
    const params: string = [
      `ndbno=${query}`,
      `nutrients=255`, // Water
      `nutrients=208`, // Energy
      `nutrients=203`, // Protein
      `nutrients=204`, // Total lipid
      `nutrients=205`, // Carbohydrate
      `nutrients=268`, // Energy
      `nutrients=269`, // Sugars
      `nutrients=291`, // Fiber
      `api_key=${this.apiKey}`
    ].join('&');

    const queryUrl = `${url}${params}`;

    return this.httpClient.get(queryUrl).map(this.extractData).catch(this.handleError);

  }

  private extractData(res: HttpResponse<any>): Food {
    const food = res.body.report.foods[0];
    return new Food(food);
  }

  private handleError(error: HttpErrorResponse | any) {
    let erroMsg: string;
    if (error instanceof HttpErrorResponse) {
      const err = error.error || '';
      erroMsg = err;
    } else {
      erroMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(erroMsg);

  }
}
