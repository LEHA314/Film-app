import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmService {
  searchUrl: string = 'http://www.omdbapi.com/?apikey=520bbe17&page=1&s=';
  filmUrl: string = "http://www.omdbapi.com/?apikey=520bbe17&i=";

  constructor(private http: Http) {
  }

  private extractLisData(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  private extractItemData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getFilms(filmName: string):Observable<any> {
    return this.http.get(this.searchUrl + filmName).map(this.extractLisData)
      .catch((error:any)=> {return Observable.throw(error);});
  }

  getFilmById(filmId: string):Observable<any> {
    return this.http.get(this.filmUrl + filmId).map(this.extractItemData)
      .catch((error:any)=> {return Observable.throw(error);});
  }
}
