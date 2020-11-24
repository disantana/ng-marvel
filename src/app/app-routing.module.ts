import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CharactersComponent} from './characters/characters.component';
import {ComicsComponent} from './comics/comics.component';
import {MoviesComponent} from './movies/movies.component';

const routes: Routes = [
  {path: 'characters', component: CharactersComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'movies', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
