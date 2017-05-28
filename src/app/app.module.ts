import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Routes, RouterModule} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { FilmCardService } from './film-card/film-card.service';
import { FavoriteFilmsComponent } from './favorite-films/favorite-films.component';

const appRoutes: Routes =[
  { path: '', component: FilmCardComponent},
  { path: 'favorite', component: FavoriteFilmsComponent},
  {path: '', redirectTo: 'favorite', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    FavoriteFilmsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FilmCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
