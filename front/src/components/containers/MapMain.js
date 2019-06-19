import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'
import MapboxLanguage from '@mapbox/mapbox-gl-language'
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import { Ref, Popup, Input, Rating, Accordion, Rail, Sticky, Button, Container, Dropdown, Form, Grid, Header, Card, Dimmer, Icon, Modal, Checkbox, Image, Item, Label, Menu, List, Divider, Segment, Step, Table } from 'semantic-ui-react'
import { connect } from 'react-redux';

//
import {s,cols} from '../../styles/style'
import * as Acts from '../../store/actions/actionsMain'

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
        "freeTime": [1560956400000,1560957600000,1560958800000],
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
        "freeTime": [1560956400000,1560957600000,1560958800000],
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
        "freeTime": [1560956400000,1560957600000,1560958800000],
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
        "freeTime": [1560956400000,1560957600000,1560958800000],
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
        "freeTime": [1560956400000,1560957600000,1560958800000],
      },
      "geometry": {
        "type": "Point",
        "coordinates": ["30.35113","59.93523"]
      }
    },{
      "type": "Feature",
      "properties": {
        "id": "charger-3",
        "icon": "circle",
        "title": "by Andrew",
        "freeTime": [1560956400000,1560957600000,1560958800000],
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

class MapMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 30.34113,
      lng: 59.92023,
      zoom: 13,
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

        <Button
          color="orange"
          style={s.mn(s.zi(2),{position:'absolute'})}
          onClick={()=>{
            this.showAllPlaces(geoJsonParkings,true)
            this.showAllPlaces(geoJsonChargers,false)
          }}
        >
          Parkings
        </Button>
        <Button
          color="orange"
          style={s.mn(s.zi(2),{position:'absolute',left:'100px'})}
          onClick={()=>{
            this.showAllPlaces(geoJsonParkings,false)
            this.showAllPlaces(geoJsonChargers,true)
          }}
        >
          Chargers
        </Button>
        <Button
          color="grey"
          style={s.mn(s.zi(2),{position:'absolute',top:'50px'})}
          onClick={()=>{
            this.showAllPlaces(geoJsonParkings,true)
            this.showAllPlaces(geoJsonChargers,false)
            this.centerPlace(geoJsonParkings.features[0].geometry.coordinates)
            this.props.getParkings([])
            console.log('parkings',this.props.parkings)
          }}
        >
          Find Parking
        </Button>
        <Button
          color="grey"
          style={s.mn(s.zi(2),{position:'absolute',top:'50px',left:'130px'})}
          onClick={()=>{
            this.showAllPlaces(geoJsonParkings,false)
            this.showAllPlaces(geoJsonChargers,true)
            this.centerPlace(geoJsonChargers.features[0].geometry.coordinates)
            this.props.getChargers([])
            console.log('chargers',this.props.chargers)
          }}
        >
          Find Charger
        </Button>
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

    await this.addPlaces('parkings',geoJsonParkings)
    await this.addPlaces('chargers',geoJsonChargers)
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
      zoom,
      pitch: 45
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



  addPlaces(nameGroup,group) {

    const { lng, lat, zoom, map } = this.state;
    var layerIDs = []

    map.on('load', () => {
      map.addSource(nameGroup, {
        "type": "geojson",
        "data": group
      });

      group.features.forEach((feature) => {
        var id = feature.properties['id'];
        var symbol = feature.properties['icon'];
        var name = feature.properties['title'];
        var layerID = 'poi-' + id;

        if (!map.getLayer(layerID)) {
          map.addLayer({
            "id": id,
            "type": "symbol",
            "interactive": true,
            "source": nameGroup,
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



          var coords = feature.geometry['coordinates'];


          map.on('click', function (e) {
            var features = map.queryRenderedFeatures(e.point);
            console.log(features)
            features.map((item)=>{
              var htmlFreeTime = '';
              JSON.parse(item.properties.freeTime).map((item)=>{
                var time = new Date(item).toLocaleTimeString().split(':').slice(0,2).join(':');
                htmlFreeTime+=`<Button onclick="this.navigationControls()">${time}</Button>`
              });
              //
              if (item.layer.id===id) {
                console.log(item,coords)
                new mapboxgl.Popup()
                  .setLngLat(coords)
                  .setHTML(htmlFreeTime)
                  .addTo(map);
              }
            })
          });


          map.on('mousemove', function (e) {
            // var features = map.queryRenderedFeatures(e.point);
            // console.log(features)
          });

          layerIDs.push(layerID);

        }
      });
    })


  }







  async showAllPlaces (geoJson,vis) {
    const {zoom, map } = this.state;

    geoJson.features.map((item)=>{
      let id = item.properties.id
      if (map.getLayer(id)) {
        // map.removeLayer(item.properties.id)
        vis ? map.setLayoutProperty(id, 'visibility', 'visible') : map.setLayoutProperty(id, 'visibility', 'none')
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



  centerPlace (coords) {
    const { map } = this.state;
    map.flyTo({center: coords, zoom: 17 });
  }



}


////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


const mapStateToProps = (state) => {
  // console.log('MainMenu mapStateToProps',state)
  return {
    parkings: state.getParkingsRes.items,
    chargers: state.getChargersRes.items,
  }
}


const mapDispatchToProps = dispatch => {
  return {
    getParkings: (items) => dispatch(Acts.getParkings(items)),
    getChargers: (items) => dispatch(Acts.getChargers(items)),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MapMain);
// export default MapMain;

