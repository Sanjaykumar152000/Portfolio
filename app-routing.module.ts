import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { MoviePageDetailsComponent } from './movie-page-details/movie-page-details.component';

const routes: Routes = [
  {path: '', redirectTo:'movies-dashboard', pathMatch: 'full'},
  {path: 'movies-dashboard',component:MoviesDashboardComponent},
  {path:'movie-page-details/:id',component:MoviePageDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


  export const routingComponents = [MoviesDashboardComponent,MoviePageDetailsComponent]


