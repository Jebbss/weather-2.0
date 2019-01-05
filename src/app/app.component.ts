import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';
import { GeolocationService } from './services/geolocation.service';
import { LatLngGeoLocation } from './classes/latLngGeoLocation.model';
import { Weather } from './classes/Weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather';
  weather;
  position: LatLngGeoLocation;

  constructor(private weatherService: WeatherService, private geoLocationService: GeolocationService) {}

  ngOnInit() {
    this.geoLocationService.getGeoLocation();

    this.geoLocationService.currentGeoLocation.subscribe(
      (position) => {this.position = position; this.getWeather(); },
      error => console.log('Error: ', error)
    );
  }

  getMockWeather(): void {
    this.weatherService.getMockWeather().subscribe(
      (weather) => { this.weather = weather; },
      error => console.log('Error: ', error));
  }

  getWeather(): void {
    console.log('getWeatherAppComp: ' + this.position);
    this.weatherService.getWeather(this.position).subscribe(
      weather => this.weather = weather
    );
  }
}
