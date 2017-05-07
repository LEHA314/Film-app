import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmCardService {
  url: string = 'http://www.omdbapi.com/?s=star&page=1';

  constructor(private http: Http) {
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  getFilms() {
    return this.http.get(this.url).map(this.extractData);
  }
}
