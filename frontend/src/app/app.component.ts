import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';
import { GeolocationService } from './services/geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather';
  weather = {};
  position = { coords: { latitude: 2, longitude: 2}};

  constructor(private weatherService: WeatherService, private geoLocationService: GeolocationService) {}

  ngOnInit() {
    this.getGeoLocationAndWeather();
  }

  getMockWeather(): void {
    this.weatherService.getMockWeather().subscribe(
      weather => this.weather = weather,
      error => console.log('Error: ', error));
  }

  getGeoLocationAndWeather(): void {
    this.geoLocationService.getGeoLocation().subscribe(
      position => this.position = position,
      error => console.log('Error: ', error),
      () => this.getWeather()
      );
  }

  getWeather(): void {
    this.weatherService.getWeather(this.position.coords.latitude, this.position.coords.longitude).subscribe(
      weather => this.weather = weather
    );
  }
}
