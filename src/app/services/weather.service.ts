import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { weatherData } from '../mock/mock-weather';
import { LatLngGeoLocation } from '../classes/latLngGeoLocation.model';
import { Weather } from '../classes/Weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = location.origin + '/api/v1/weather/';
  public weather: Weather;

  constructor(private http: HttpClient) { }

  getMockWeather(): Observable<{}> {
    return of(weatherData);
  }

  getWeather(position: LatLngGeoLocation): Observable<Weather[]> {
    const fullUrl = this.makeUrl(position);
    console.log(fullUrl);
    return this.http.get<Weather[]>(fullUrl)
    .pipe(
      tap(_ => console.log('fetched weather')),
      catchError(this.handleError('getWeather', []))
    );
  }

//   constructor(private routeParams: RouteParams,
//     public http: Http) {
//     this.user = new User();
//     this.http.get('http://localhost:3000/user/' + this.routeParams.get('id'))
//         .map((res: Response) => res.json())
//         .subscribe((json: Object) => {
//             this.user = new User().fromJSON(json);
//         });
// }

  private makeUrl(position: LatLngGeoLocation): string {
    return this.url + position.latitude + ',' + position.longitude;
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
