import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { SearchResult } from '../models/SearchResult';
import * as fromRoot from '../reducers/reducers';
import * as Action from '../actions/actions';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  results: Observable<SearchResult[]>;
  loading: Observable<Boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.results = this.store.select(state => state.results);
    this.loading = this.store.select(state => state.loading);
   }

  ngOnInit() {
  }

}
