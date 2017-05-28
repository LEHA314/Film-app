import { Component, OnInit } from '@angular/core';
import {FilmCardService} from './film-card.service';
import  {Film} from './film-card';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  filmList : Film[] = [];
  filmName: string = '';
  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.filmName = 'Futurama';
   this.getFilms();
  }

  private getFilms() {
    this.filmCardService.getFilms().subscribe(data => {
      this.filmList = data;
    })
  }

}
