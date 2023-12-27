import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import {HttpClientModule} from '@angular/common/http';
// import { FilterPipe } from './shared/filter.pipe';
import { MoviePageDetailsComponent } from './movie-page-details/movie-page-details.component';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { RatingModule } from 'ngx-rating';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    MoviesDashboardComponent,
    // FilterPipe,
    MoviePageDetailsComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    Ng2SearchPipeModule,
    NgxStarRatingModule
    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
