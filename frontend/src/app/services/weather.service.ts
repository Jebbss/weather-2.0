import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { weatherData } from '../mock/mock-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = location.origin + '/api/v1/weather/3,2';

  constructor(private http: HttpClient) { }

  getMockWeather(): Observable<{}> {
    return of(weatherData);
  }

  getWeather(latitude: number, longitude: number): Observable<{}> {
    console.log(location.origin);
    return this.http.get<JSON>(this.url)
    .pipe(
      tap(_ => console.log('fetched weather')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
