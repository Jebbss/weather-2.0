import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { LatLngGeoLocation } from '../classes/latLngGeoLocation.model';

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
  defaultGeoLocation: LatLngGeoLocation = { latitude: 44, longitude: -88 };
  private geoLocation = new BehaviorSubject(this.defaultGeoLocation);
  currentGeoLocation = this.geoLocation.asObservable();

  constructor() { }

  setGeoLocation(latLngGeoLocation: LatLngGeoLocation) {
    console.log('setGeoLocation');
    console.log(latLngGeoLocation);
    this.geoLocation.next(latLngGeoLocation);
  }

  public getGeoLocation(geoLocationOptions?: any) {
    console.log('getGeoLocation');
    geoLocationOptions = geoLocationOptions || { timeout: 50000 };
      if ('geolocation' in navigator) {
        window.navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setGeoLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
          },
          (error) => {
            console.log(error);
          },
          geoLocationOptions);
      } else {
        console.log('Location services unavailable');
      }
  }

  // public getGeoLocation(geoLocationOptions?: any): Observable<any> {
  //   geoLocationOptions = geoLocationOptions || { timeout: 50000 };
  //   return Observable.create(observer => {
  //     if ('geolocation' in navigator) {
  //       window.navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           observer.next(position);
  //           observer.complete();
  //         },
  //         (error) => {
  //           switch (error.code) {
  //             case 1:
  //               observer.error(GEOLOCATION_ERRORS['errors.location.permissionDenied']);
  //               break;
  //             case 2:
  //               observer.error(GEOLOCATION_ERRORS['errors.location.positionUnavailable']);
  //               break;
  //             case 3:
  //               observer.error(GEOLOCATION_ERRORS['errors.location.timeout']);
  //               break;
  //           }
  //         },
  //         geoLocationOptions);
  //     } else {
  //       observer.error(GEOLOCATION_ERRORS['errors.location.unsupportedBrowser']);
  //     }
  //   });
  // }
}
