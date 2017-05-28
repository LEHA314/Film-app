import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FilmCardService {
  api_key: string = '5c25377004d29b50cc0a78f55ab203b5';
  url: string = 'http://api.themoviedb.org/3/discover/movie?certification_country=US&certification=R&page=1&sort_by=vote_average.desc&api_key=' + this.api_key;

  constructor(private _http: Http) {
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.results || {};
  }

  getFilms() {
    return this._http.get(this.url).map(this.extractData);
  }
}
