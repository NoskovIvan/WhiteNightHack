import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'

//
import {s,cols} from '../../styles/style'

// var MapboxDirections = require('@mapbox/mapbox-gl-directions');
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
mapboxgl.accessToken = 'pk.eyJ1IjoicW1pciIsImEiOiJjand4YWpwanQwZjg3NGFwbTdxNHM2aHh1In0.W8KsODNfom6HQJbLCUvCMQ';

const geoJsonParkings = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "parking-1",
        "icon": "marker",
        "title": "by Ivan",
      },
      "geometry": {
        "type": "Point",
        "coordinates": ["30.34113","59.91523"]
      }
    },{
      "type": "Feature",
      "properties": {
        "id": "parking-2",
        "icon": "marker",
        "title": "by Boris",
      },
      "geometry": {
        "type": "Point",
        "coordinates": ["30.34113","59.92523"]
      }
    },{
      "type": "Feature",
      "properties": {
        "id": "parking-3",
        "icon": "marker",
        "title": "by Andrew",
      },
      "geometry": {
        "type": "Point",
        "coordinates": ["30.33113","59.93523"]
      }
    },
  ]
};


const geoJsonChargers = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "id": "charger-1",
        "icon": "circle",
        "title": "by Ivan",
      },
      "geometry": {
        "type": "Point",
        "coordinates": ["30.34113","59.9223"]
      }
    },{
      "type": "Feature",
      "properties": {
        "id": "charger-2",
        "icon": "circle",
        "title": "by Boris",
      },
      "geometry": {
        "type": "Point",
        "coordinates": ["30.34113","59.92523"]
      }
    },{
      "type": "Feature",
      "properties": {
        "id": "charger-3",
        "icon": "circle",
        "title": "by Andrew",
      },
      "geometry": {
        "type": "Point",
        "coordinates": ["30.33113","59.93523"]
      }
    },
  ]
};


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

class MapPick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 30.34113,
      lng: 59.91523,
      zoom: 12,
      map: {},
      myGeo: {},
      idLayerParkings: [],
      idLayerChargers: [],
    };
  }
  //
  render () {
    const {
      trigger,
    } = this.props

    return (
      <div ref={el => this.mapContainer = el} style={s.mn(s.w('100%'),s.h('100%'))}>

      </div>
    );
  }



  async componentDidMount () {

    const { lng, lat, zoom, map, myGeo } = this.state;

    this.setState({map: await this.mapInit()})

    // await this.mapLanguage()
    await this.mapOnMove()
    await this.add3dBuildings()
    // console.log(coords)
    // await setInterval(async ()=>{
    //   const { myGeo } = this.state;
    //   await this.geoLocation()
    //   console.log('myGeo.coords',myGeo)
    //   myGeo ? await this.addPlace(myGeo) : null
    // },1000)

    // await this.addPlaces(geoJsonParkings)
    // await this.addPlaces(geoJsonChargers)
    // await this.navigationControls()
    this.geoLocation()

  }



  async mapInit() {

    const { lng, lat, zoom } = this.state;

    const map = await new mapboxgl.Map({
      container: this.mapContainer,
      // style: 'mapbox://styles/mapbox/streets-v11',
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lat, lng],
      zoom
    });

    await map.addControl(new MapboxLanguage({
      defaultLanguage: 'ru'
    }))

    return map

  }



  async mapLanguage() {

    const { map } = this.state;

    await map.setLayoutProperty('country-label', 'text-field', ['get', 'name_' + 'ru']);

  }



  mapOnMove() {

    const { lng, lat, zoom, map } = this.state;

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });

    });

  }



  add3dBuildings() {

    const { lng, lat, zoom, map } = this.state;

    map.on('load', function() {
      var layers = map.getStyle().layers;

      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }

      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "height"]
          ],
          'fill-extrusion-base': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "min_height"]
          ],
          'fill-extrusion-opacity': .6
        }
      }, labelLayerId);

    });

  }



  addPlaces(places) {

    const { lng, lat, zoom, map } = this.state;
    var layerIDs = []

    map.on('load', function() {
      map.addSource('places', {
        "type": "geojson",
        "data": places
      });

      places.features.forEach((feature) => {
        var id = feature.properties['id'];
        var symbol = feature.properties['icon'];
        var name = feature.properties['title'];
        var layerID = 'poi-' + id;

        if (!map.getLayer(layerID)) {
          map.addLayer({
            "id": id,
            "type": "symbol",
            "source": "places",
            "layout": {
              "icon-image": "{icon}-15",
              "icon-allow-overlap": true,
              "text-field": "{title}",
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 11,
              "text-transform": "uppercase",
              "text-letter-spacing": 0.05,
              "text-offset": [0, 1.5]
            },
            "paint": {
              "text-color": "#202",
              "text-halo-color": "#fff",
              "text-halo-width": 2
            },
            "filter": ["==", "icon", symbol]
          });

          layerIDs.push(layerID);

        }
      });
    })

    // this.setState({idLayerParkings:layerIDs})
  }




  addPlace(coords) {

    const {zoom, map, myGeo } = this.state;
    const { longitude, latitude } = coords;
    var layerIDs = []

    if (!myGeo) return

    console.log('addPlace',coords)

    var places = {
      "type": "FeatureCollection",
      "features": [{
          "type": "Feature",
          "properties": {
            "icon": "theatre"
          },
          "geometry": {
            "type": "Point",
            "coordinates": [myGeo.latitude, myGeo.longitude]
          }
        },
      ]
    };

    map.on('load', function() {
      map.addSource('places', {
        "type": "geojson",
        "data": places
      });

      places.features.forEach(function(feature) {
        var symbol = feature.properties['icon'];
        var layerID = 'poi-' + symbol;

        if (!map.getLayer(layerID)) {
          map.addLayer({
            "id": layerID,
            "type": "symbol",
            "source": "places",
            "layout": {
              "icon-image": symbol + "-15",
              "icon-allow-overlap": true,
              "text-field": symbol,
              "text-font": ["Open Sans Bold", "Arial Unicode MS Bold"],
              "text-size": 11,
              "text-transform": "uppercase",
              "text-letter-spacing": 0.05,
              "text-offset": [0, 1.5]
            },
            "paint": {
              "text-color": "#202",
              "text-halo-color": "#fff",
              "text-halo-width": 2
            },
            "filter": ["==", "icon", symbol]
          });

          layerIDs.push(layerID);
        }
      });
    })

    return

  }


  async removeAllPlaces (geoJson) {
    const {zoom, map } = this.state;

    geoJson.features.map((item)=>{
      if (map.getLayer(item.properties.id)) {
        map.removeLayer(item.properties.id)
      }
    })


    return
  }



  async navigationControls () {
    const {zoom, map } = this.state;


    map.addControl(new MapboxDirections({
      accessToken: mapboxgl.accessToken
    }), 'top-right');

    return
  }



  geoLocation () {
    const { map } = this.state;
    map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    }));
  }



}

export default MapPick;
