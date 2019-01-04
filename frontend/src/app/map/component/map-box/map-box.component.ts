import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../../service/map.service';
import { GeoJson, FeatureCollection } from '../../map';
import { GeolocationService } from '../../../services/geolocation.service';
import { LatLngGeoLocation } from '../../../classes/latLngGeoLocation.model';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/basic-v9';
  lat = 37.75;
  lng = -122.41;
  message = 'Hello Teapot!';

  position: LatLngGeoLocation;
  source: any;
  markers: any;

  constructor(private mapService: MapService,
    private geoLocationService: GeolocationService) { }

  ngOnInit() {
    this.geoLocationService.currentGeoLocation.subscribe(
      (position) => { this.position = position; this.buildMap(); },
      error => console.log('Error: ', error)
    );
  }

  buildMap() {
    console.log('buildMap: ' + this.position.latitude);
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.position.longitude, this.position.latitude]
    });


    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', (event) => {
      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [this.position.longitude, this.position.latitude]
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

    this.map.on('click', (e) => {
      console.log(e.lngLat);
      this.geoLocationService.setGeoLocation({latitude: e.lngLat.lat, longitude: e.lngLat.lng});
    });
  }
  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    });
  }
}
