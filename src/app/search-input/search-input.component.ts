import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, switchAll, subscribeOn } from 'rxjs/operators'
import { Store } from '@ngrx/store';

import * as fromRoot from '../reducers/reducers';
import * as Actions from '../actions/actions';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  searchControl = new FormControl('');

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(300),
      switchAll(),
      filter((value: any) => value.trim()),
      map(() => this.store.dispatch(new Actions.Search(this.searchControl.value)))
    )
  }

}
