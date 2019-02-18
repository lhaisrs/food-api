import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NutritionService } from './services/nutrition.service';

import { reducer } from './reducers/reducers';
import { FoodEffects } from './effects/food.effects';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatInputModule, MatProgressBarModule, MatListModule, MatLineModule, MatRippleModule } from '@angular/material';

import { SearchInputComponent } from './search-input/search-input.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FoodResultsComponent } from './food-results/food-results.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailsComponent } from './food-details/food-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchResultsComponent,
    FoodResultsComponent,
    FoodListComponent,
    FoodDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([FoodEffects]),
    NoopAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressBarModule,
    MatListModule,
    MatLineModule,
    MatRippleModule
  ],
  providers: [NutritionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
