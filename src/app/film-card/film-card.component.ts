import { Component, OnInit } from '@angular/core';
import {FilmCardService} from './film-card.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  filmList : object[] = []
  constructor(private filmCardService: FilmCardService) { }

  ngOnInit() {
    this.filmCardService.getFilms().subscribe(data => {
      this.filmList = data;
    })
  }

}
