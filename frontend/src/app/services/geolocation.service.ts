import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

const GEOLOCATION_ERRORS = {
  'errors.location.unsupportedBrowser': 'Browser does not support location services',
  'errors.location.permissionDenied': 'You have rejected access to your location',
  'errors.location.positionUnavailable': 'Unable to determine your location',
  'errors.location.timeout': 'Service timeout has been reached'
};

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  public getGeoLocation(geoLocationOptions?: any): Observable<any> {
    geoLocationOptions = geoLocationOptions || { timeout: 50000 };
        return Observable.create(observer => {
          if ('geolocation' in navigator) {
            window.navigator.geolocation.getCurrentPosition(
              (position) => {
                observer.next(position);
                observer.complete();
              },
              (error) => {
                switch (error.code) {
                  case 1:
                    observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
                    break;
                  case 2:
                    observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
                    break;
                  case 3:
                    observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
                    break;
                }
              },
              geoLocationOptions);
        } else {
              observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
        }
        });
      }
}
