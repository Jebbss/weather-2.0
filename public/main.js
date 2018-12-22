(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span {\n  margin: 0.5rem;\n}\n\na:hover {\n  text-shadow: 1px 1px 2px white;\n}\n\na {\n  color: black;\n}\n\n.mainDisplay {\n  background-color: transparent;\n  text-align: center;\n}\n\n.map-container {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  height: 23%;\n  width: 100%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsK0JBQStCO0NBQ2hDOztBQUVEO0VBQ0UsYUFBYTtDQUNkOztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW4ge1xuICBtYXJnaW46IDAuNXJlbTtcbn1cblxuYTpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZTtcbn1cblxuYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1haW5EaXNwbGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hcC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG4gIGhlaWdodDogMjMlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-container\">\n  <app-map-box></app-map-box>\n</div>\n\n<div class=\"row mainDisplay\">\n  <main class=\"container\">\n    <div class=\"\">\n      <p id=\"dayOfWeek\">{{weather.currently.time * 1000 | date: 'fullDate'}}</p>\n      <span id=\"temp\">{{weather.currently.temperature | number:'1.0-0'}} °F</span>\n      <span id=\"cond\">{{weather.currently.summary}}</span>\n      <p id=\"summary\">{{weather.daily.summary}}</p>\n      <p>\n        <a href=\"https://darksky.net/poweredby/\" target=\"_blank\">\n          Powered by Dark Sky</a>\n      </p>\n    </div>\n  </main>\n</div>\n<div>\n  <p id=\"lat\">({{position.latitude | number}} , {{position.longitude | number}})</p>\n</div>\n<div id=\"lngLat\"></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/weather.service */ "./src/app/services/weather.service.ts");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/geolocation.service */ "./src/app/services/geolocation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(weatherService, geoLocationService) {
        this.weatherService = weatherService;
        this.geoLocationService = geoLocationService;
        this.title = 'weather';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geoLocationService.getGeoLocation();
        this.geoLocationService.currentGeoLocation.subscribe(function (position) { _this.position = position; _this.getWeather(); }, function (error) { return console.log('Error: ', error); });
    };
    AppComponent.prototype.getMockWeather = function () {
        var _this = this;
        this.weatherService.getMockWeather().subscribe(function (weather) { _this.weather = weather; }, function (error) { return console.log('Error: ', error); });
    };
    AppComponent.prototype.getWeather = function () {
        var _this = this;
        console.log('getWeatherAppComp: ' + this.position);
        this.weatherService.getWeather(this.position).subscribe(function (weather) { return _this.weather = weather; });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"], _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _map_component_map_box_map_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map/component/map-box/map-box.component */ "./src/app/map/component/map-box/map-box.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _map_component_map_box_map_box_component__WEBPACK_IMPORTED_MODULE_5__["MapBoxComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/map/component/map-box/map-box.component.css":
/*!*************************************************************!*\
  !*** ./src/app/map/component/map-box/map-box.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n    position: absolute;\n    left: 12.5%;\n    height:23%;\n    width: 75%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL2NvbXBvbmVudC9tYXAtYm94L21hcC1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7R0FDWiIsImZpbGUiOiJzcmMvYXBwL21hcC9jb21wb25lbnQvbWFwLWJveC9tYXAtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWFwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTIuNSU7XG4gICAgaGVpZ2h0OjIzJTtcbiAgICB3aWR0aDogNzUlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/map/component/map-box/map-box.component.html":
/*!**************************************************************!*\
  !*** ./src/app/map/component/map-box/map-box.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row map\" id=\"map\"></div>\n"

/***/ }),

/***/ "./src/app/map/component/map-box/map-box.component.ts":
/*!************************************************************!*\
  !*** ./src/app/map/component/map-box/map-box.component.ts ***!
  \************************************************************/
/*! exports provided: MapBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBoxComponent", function() { return MapBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _service_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/map.service */ "./src/app/map/service/map.service.ts");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/geolocation.service */ "./src/app/services/geolocation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapBoxComponent = /** @class */ (function () {
    function MapBoxComponent(mapService, geoLocationService) {
        this.mapService = mapService;
        this.geoLocationService = geoLocationService;
        this.style = 'mapbox://styles/mapbox/light-v9';
        this.lat = 37.75;
        this.lng = -122.41;
        this.message = 'Hello Teapot!';
    }
    MapBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geoLocationService.currentGeoLocation.subscribe(function (position) { _this.position = position; _this.buildMap(); }, function (error) { return console.log('Error: ', error); });
    };
    MapBoxComponent.prototype.buildMap = function () {
        var _this = this;
        console.log('buildMap: ' + this.position.latitude);
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            container: 'map',
            style: this.style,
            zoom: 13,
            center: [this.position.longitude, this.position.latitude]
        });
        /// Add map controls
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["NavigationControl"]());
        this.map.on('load', function (event) {
            /// create map layers with realtime data
            _this.map.addLayer({
                id: 'firebase',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'FeatureCollection',
                        features: [{
                                type: 'Feature',
                                geometry: {
                                    type: 'Point',
                                    coordinates: [_this.position.longitude, _this.position.latitude]
                                },
                                properties: {
                                    title: 'Here',
                                    icon: 'circle'
                                }
                            }]
                    }
                },
                type: 'symbol',
                layout: {
                    'text-field': '{title}',
                    'text-size': 18,
                    'icon-image': 'circle-stroked-15',
                    'text-offset': [0, 1.5]
                },
                paint: {
                    'text-color': '#f16624',
                    'text-halo-color': '#fff',
                    'text-halo-width': 2
                }
            });
        });
        this.map.on('click', function (e) {
            console.log(e);
            document.getElementById('lngLat').innerHTML = JSON.stringify(e.lngLat);
            _this.geoLocationService.setGeoLocation({ latitude: e.lngLat.lat, longitude: e.lngLat.lng });
        });
    };
    MapBoxComponent.prototype.flyTo = function (data) {
        this.map.flyTo({
            center: data.geometry.coordinates
        });
    };
    MapBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-box',
            template: __webpack_require__(/*! ./map-box.component.html */ "./src/app/map/component/map-box/map-box.component.html"),
            styles: [__webpack_require__(/*! ./map-box.component.css */ "./src/app/map/component/map-box/map-box.component.css")]
        }),
        __metadata("design:paramtypes", [_service_map_service__WEBPACK_IMPORTED_MODULE_2__["MapService"],
            _services_geolocation_service__WEBPACK_IMPORTED_MODULE_3__["GeolocationService"]])
    ], MapBoxComponent);
    return MapBoxComponent;
}());



/***/ }),

/***/ "./src/app/map/service/map.service.ts":
/*!********************************************!*\
  !*** ./src/app/map/service/map.service.ts ***!
  \********************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapService = /** @class */ (function () {
    function MapService() {
        mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["accessToken"] = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mapbox.accessToken;
    }
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/mock/mock-weather.ts":
/*!**************************************!*\
  !*** ./src/app/mock/mock-weather.ts ***!
  \**************************************/
/*! exports provided: weatherData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherData", function() { return weatherData; });
var weatherData = {
    latitude: 43.01,
    longitude: -88.23,
    timezone: 'America/Chicago',
    currently: {
        time: 1543413255,
        summary: 'Mostly Cloudy',
        icon: 'partly-cloudy-day',
        nearestStormDistance: 81,
        nearestStormBearing: 98,
        precipIntensity: 0,
        precipProbability: 0,
        temperature: 71.56,
        apparentTemperature: 72.64,
        dewPoint: 68.43,
        humidity: 0.9,
        pressure: 1011.85,
        windSpeed: 6.21,
        windGust: 6.61,
        windBearing: 220,
        cloudCover: 0.93,
        uvIndex: 3,
        visibility: 8.73,
        ozone: 307.25
    },
    daily: {
        summary: 'Rain tomorrow through Friday, with high temperatures peaking at 87°F on Monday.',
        icon: 'rain',
        data: [
            {
                time: 1535173200,
                summary: 'Mostly cloudy until afternoon.',
                icon: 'partly-cloudy-day',
                sunriseTime: 1535195490,
                sunsetTime: 1535244083,
                moonPhase: 0.47,
                precipIntensity: 0.0009,
                precipIntensityMax: 0.0052,
                precipIntensityMaxTime: 1535216400,
                precipProbability: 0.42,
                precipType: 'rain',
                temperatureHigh: 82.36,
                temperatureHighTime: 1535234400,
                temperatureLow: 62.43,
                temperatureLowTime: 1535284800,
                apparentTemperatureHigh: 85.89,
                apparentTemperatureHighTime: 1535234400,
                apparentTemperatureLow: 62.99,
                apparentTemperatureLowTime: 1535281200,
                dewPoint: 66.96,
                humidity: 0.85,
                pressure: 1011.86,
                windSpeed: 5.12,
                windGust: 17.7,
                windGustTime: 1535220000,
                windBearing: 229,
                cloudCover: 0.6,
                uvIndex: 6,
                uvIndexTime: 1535216400,
                visibility: 10,
                ozone: 306.58,
                temperatureMin: 62.83,
                temperatureMinTime: 1535173200,
                temperatureMax: 82.36,
                temperatureMaxTime: 1535234400,
                apparentTemperatureMin: 63.33,
                apparentTemperatureMinTime: 1535173200,
                apparentTemperatureMax: 85.89,
                apparentTemperatureMaxTime: 1535234400
            },
            {
                time: 1535259600,
                summary: 'Heavy rain starting in the afternoon.',
                icon: 'rain',
                sunriseTime: 1535281956,
                sunsetTime: 1535330384,
                moonPhase: 0.51,
                precipIntensity: 0.0097,
                precipIntensityMax: 0.0739,
                precipIntensityMaxTime: 1535320800,
                precipProbability: 0.51,
                precipType: 'rain',
                temperatureHigh: 85.99,
                temperatureHighTime: 1535313600,
                temperatureLow: 73.82,
                temperatureLowTime: 1535342400,
                apparentTemperatureHigh: 94.1,
                apparentTemperatureHighTime: 1535313600,
                apparentTemperatureLow: 74.98,
                apparentTemperatureLowTime: 1535342400,
                dewPoint: 69.12,
                humidity: 0.85,
                pressure: 1015.18,
                windSpeed: 4.73,
                windGust: 20.96,
                windGustTime: 1535342400,
                windBearing: 190,
                cloudCover: 0.73,
                uvIndex: 6,
                uvIndexTime: 1535302800,
                visibility: 10,
                ozone: 289.18,
                temperatureMin: 62.43,
                temperatureMinTime: 1535284800,
                temperatureMax: 85.99,
                temperatureMaxTime: 1535313600,
                apparentTemperatureMin: 62.99,
                apparentTemperatureMinTime: 1535281200,
                apparentTemperatureMax: 94.1,
                apparentTemperatureMaxTime: 1535313600
            },
            {
                time: 1535346000,
                summary: 'Heavy rain in the morning and breezy throughout the day.',
                icon: 'rain',
                sunriseTime: 1535368421,
                sunsetTime: 1535416684,
                moonPhase: 0.54,
                precipIntensity: 0.045,
                precipIntensityMax: 0.2615,
                precipIntensityMaxTime: 1535360400,
                precipProbability: 0.86,
                precipType: 'rain',
                temperatureHigh: 86.75,
                temperatureHighTime: 1535403600,
                temperatureLow: 73.39,
                temperatureLowTime: 1535457600,
                apparentTemperatureHigh: 95.86,
                apparentTemperatureHighTime: 1535403600,
                apparentTemperatureLow: 74.55,
                apparentTemperatureLowTime: 1535457600,
                dewPoint: 72.13,
                humidity: 0.79,
                pressure: 1009.81,
                windSpeed: 14.79,
                windGust: 40.58,
                windGustTime: 1535371200,
                windBearing: 208,
                cloudCover: 0.58,
                uvIndex: 6,
                uvIndexTime: 1535389200,
                visibility: 10,
                ozone: 286.48,
                temperatureMin: 73.9,
                temperatureMinTime: 1535371200,
                temperatureMax: 86.75,
                temperatureMaxTime: 1535403600,
                apparentTemperatureMin: 75.06,
                apparentTemperatureMinTime: 1535371200,
                apparentTemperatureMax: 95.86,
                apparentTemperatureMaxTime: 1535403600
            },
            {
                time: 1535432400,
                summary: 'Breezy throughout the day and rain starting in the evening.',
                icon: 'rain',
                sunriseTime: 1535454887,
                sunsetTime: 1535502984,
                moonPhase: 0.57,
                precipIntensity: 0.0233,
                precipIntensityMax: 0.1452,
                precipIntensityMaxTime: 1535515200,
                precipProbability: 0.88,
                precipType: 'rain',
                temperatureHigh: 84.53,
                temperatureHighTime: 1535486400,
                temperatureLow: 54.78,
                temperatureLowTime: 1535544000,
                apparentTemperatureHigh: 92.48,
                apparentTemperatureHighTime: 1535486400,
                apparentTemperatureLow: 54.78,
                apparentTemperatureLowTime: 1535544000,
                dewPoint: 71.37,
                humidity: 0.8,
                pressure: 1007.42,
                windSpeed: 16.49,
                windGust: 41.24,
                windGustTime: 1535443200,
                windBearing: 221,
                cloudCover: 0.52,
                uvIndex: 6,
                uvIndexTime: 1535475600,
                visibility: 10,
                ozone: 279.63,
                temperatureMin: 69.44,
                temperatureMinTime: 1535515200,
                temperatureMax: 84.53,
                temperatureMaxTime: 1535486400,
                apparentTemperatureMin: 70.2,
                apparentTemperatureMinTime: 1535515200,
                apparentTemperatureMax: 92.48,
                apparentTemperatureMaxTime: 1535486400
            },
            {
                time: 1535518800,
                summary: 'Mostly cloudy in the morning.',
                icon: 'partly-cloudy-day',
                sunriseTime: 1535541352,
                sunsetTime: 1535589282,
                moonPhase: 0.6,
                precipIntensity: 0.0203,
                precipIntensityMax: 0.1871,
                precipIntensityMaxTime: 1535518800,
                precipProbability: 0.34,
                precipType: 'rain',
                temperatureHigh: 71.55,
                temperatureHighTime: 1535576400,
                temperatureLow: 51.96,
                temperatureLowTime: 1535626800,
                apparentTemperatureHigh: 71.55,
                apparentTemperatureHighTime: 1535576400,
                apparentTemperatureLow: 51.96,
                apparentTemperatureLowTime: 1535626800,
                dewPoint: 54.47,
                humidity: 0.72,
                pressure: 1015.98,
                windSpeed: 10.45,
                windGust: 24.77,
                windGustTime: 1535518800,
                windBearing: 311,
                cloudCover: 0.4,
                uvIndex: 7,
                uvIndexTime: 1535562000,
                visibility: 10,
                ozone: 288.21,
                temperatureMin: 54.78,
                temperatureMinTime: 1535544000,
                temperatureMax: 71.55,
                temperatureMaxTime: 1535576400,
                apparentTemperatureMin: 54.78,
                apparentTemperatureMinTime: 1535544000,
                apparentTemperatureMax: 71.55,
                apparentTemperatureMaxTime: 1535576400
            },
            {
                time: 1535605200,
                summary: 'Partly cloudy throughout the day.',
                icon: 'partly-cloudy-day',
                sunriseTime: 1535627817,
                sunsetTime: 1535675581,
                moonPhase: 0.63,
                precipIntensity: 0,
                precipIntensityMax: 0,
                precipProbability: 0,
                temperatureHigh: 74.86,
                temperatureHighTime: 1535659200,
                temperatureLow: 59.69,
                temperatureLowTime: 1535713200,
                apparentTemperatureHigh: 74.86,
                apparentTemperatureHighTime: 1535659200,
                apparentTemperatureLow: 59.73,
                apparentTemperatureLowTime: 1535713200,
                dewPoint: 53.41,
                humidity: 0.7,
                pressure: 1022.21,
                windSpeed: 2.97,
                windGust: 15.35,
                windGustTime: 1535673600,
                windBearing: 170,
                cloudCover: 0.31,
                uvIndex: 7,
                uvIndexTime: 1535652000,
                visibility: 10,
                ozone: 296.44,
                temperatureMin: 51.96,
                temperatureMinTime: 1535626800,
                temperatureMax: 74.86,
                temperatureMaxTime: 1535659200,
                apparentTemperatureMin: 51.96,
                apparentTemperatureMinTime: 1535626800,
                apparentTemperatureMax: 74.86,
                apparentTemperatureMaxTime: 1535659200
            },
            {
                time: 1535691600,
                summary: 'Rain in the afternoon.',
                icon: 'rain',
                sunriseTime: 1535714282,
                sunsetTime: 1535761878,
                moonPhase: 0.67,
                precipIntensity: 0.0185,
                precipIntensityMax: 0.0581,
                precipIntensityMaxTime: 1535738400,
                precipProbability: 0.91,
                precipType: 'rain',
                temperatureHigh: 73.63,
                temperatureHighTime: 1535742000,
                temperatureLow: 64.96,
                temperatureLowTime: 1535799600,
                apparentTemperatureHigh: 74.28,
                apparentTemperatureHighTime: 1535742000,
                apparentTemperatureLow: 65.59,
                apparentTemperatureLowTime: 1535799600,
                dewPoint: 61.72,
                humidity: 0.83,
                pressure: 1016.35,
                windSpeed: 8.45,
                windGust: 15.27,
                windGustTime: 1535749200,
                windBearing: 170,
                cloudCover: 0.86,
                uvIndex: 4,
                uvIndexTime: 1535731200,
                visibility: 10,
                ozone: 290.15,
                temperatureMin: 59.69,
                temperatureMinTime: 1535713200,
                temperatureMax: 73.63,
                temperatureMaxTime: 1535742000,
                apparentTemperatureMin: 59.73,
                apparentTemperatureMinTime: 1535713200,
                apparentTemperatureMax: 74.28,
                apparentTemperatureMaxTime: 1535742000
            },
            {
                time: 1535778000,
                summary: 'Mostly cloudy until evening.',
                icon: 'partly-cloudy-day',
                sunriseTime: 1535800747,
                sunsetTime: 1535848175,
                moonPhase: 0.7,
                precipIntensity: 0.0006,
                precipIntensityMax: 0.0024,
                precipIntensityMaxTime: 1535778000,
                precipProbability: 0.25,
                precipType: 'rain',
                temperatureHigh: 81.03,
                temperatureHighTime: 1535835600,
                temperatureLow: 63.43,
                temperatureLowTime: 1535886000,
                apparentTemperatureHigh: 84.18,
                apparentTemperatureHighTime: 1535835600,
                apparentTemperatureLow: 63.87,
                apparentTemperatureLowTime: 1535886000,
                dewPoint: 66.13,
                humidity: 0.82,
                pressure: 1011.51,
                windSpeed: 8.86,
                windGust: 12.3,
                windGustTime: 1535817600,
                windBearing: 214,
                cloudCover: 0.66,
                uvIndex: 4,
                uvIndexTime: 1535817600,
                visibility: 10,
                ozone: 293.3,
                temperatureMin: 64.96,
                temperatureMinTime: 1535799600,
                temperatureMax: 81.03,
                temperatureMaxTime: 1535835600,
                apparentTemperatureMin: 65.59,
                apparentTemperatureMinTime: 1535799600,
                apparentTemperatureMax: 84.18,
                apparentTemperatureMaxTime: 1535835600
            }
        ]
    },
    offset: -5
};


/***/ }),

/***/ "./src/app/services/geolocation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GEOLOCATION_ERRORS = {
    'errors.location.unsupportedBrowser': 'Browser does not support location services',
    'errors.location.permissionDenied': 'You have rejected access to your location',
    'errors.location.positionUnavailable': 'Unable to determine your location',
    'errors.location.timeout': 'Service timeout has been reached'
};
var GeolocationService = /** @class */ (function () {
    function GeolocationService() {
        this.defaultGeoLocation = { latitude: 44, longitude: -88 };
        this.geoLocation = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultGeoLocation);
        this.currentGeoLocation = this.geoLocation.asObservable();
    }
    GeolocationService.prototype.setGeoLocation = function (latLngGeoLocation) {
        console.log('setGeoLocation');
        console.log(latLngGeoLocation);
        this.geoLocation.next(latLngGeoLocation);
    };
    GeolocationService.prototype.getGeoLocation = function (geoLocationOptions) {
        var _this = this;
        console.log('getGeoLocation');
        geoLocationOptions = geoLocationOptions || { timeout: 50000 };
        if ('geolocation' in navigator) {
            window.navigator.geolocation.getCurrentPosition(function (position) {
                _this.setGeoLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
            }, function (error) {
                console.log(error);
            }, geoLocationOptions);
        }
        else {
            console.log('Location services unavailable');
        }
    };
    GeolocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mock_mock_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock/mock-weather */ "./src/app/mock/mock-weather.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.url = location.origin + '/api/v1/weather/';
    }
    WeatherService.prototype.getMockWeather = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_mock_mock_weather__WEBPACK_IMPORTED_MODULE_4__["weatherData"]);
    };
    WeatherService.prototype.getWeather = function (position) {
        var fullUrl = this.makeUrl(position);
        console.log(fullUrl);
        return this.http.get(fullUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log('fetched weather'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getWeather', [])));
    };
    //   constructor(private routeParams: RouteParams,
    //     public http: Http) {
    //     this.user = new User();
    //     this.http.get('http://localhost:3000/user/' + this.routeParams.get('id'))
    //         .map((res: Response) => res.json())
    //         .subscribe((json: Object) => {
    //             this.user = new User().fromJSON(json);
    //         });
    // }
    WeatherService.prototype.makeUrl = function (position) {
        return this.url + position.latitude + ',' + position.longitude;
    };
    WeatherService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    mapbox: {
        accessToken: 'pk.eyJ1IjoiamViYnNzIiwiYSI6ImNqb3VjbXYwYzFhbzIzcHJubzZ3NDY2azUifQ.NxTYj6TDlod2Ie81KOn-lg'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jebsumeracki/Documents/GitHub/weather/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map