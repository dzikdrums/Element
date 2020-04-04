import './Map.scss';

import { InteractiveMap, Marker } from 'react-map-gl';
import React, { Component } from 'react';

import Pin from './Pin';
import uniqid from 'uniqid';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoiZHppa2RydW1zIiwiYSI6ImNrOGtlZWxiajAwdGozcHJ0Y3F4Z2E0ZmgifQ.lnpODOl4BQ7tC5ZrkLbh_w';

class Map extends Component {
  state = {
    viewport: {
      latitude: 37.78,
      longitude: -122.41,
      zoom: 14,
      bearing: 0,
      pitch: 20
    },
    markers: [],
    events: {}
  };

  render() {
    const setViewport = props => {
      this.setState({
        viewport: props
      });
    };

    const handleClick = ({ lngLat: [longitude, latitude] }) => {
      const id = uniqid();
      this.setState({
        markers: [...this.state.markers, { id: id, longitude, latitude }]
      });
    };

    const logDragEvent = (name, event) => {
      this.setState({
        events: this.state.events
      });
      this.setState({
        ...this.state.events,
        [name]: event.lngLat
      });
    };

    const onMarkerDragStart = event => {
      logDragEvent('onDragStart', event);
    };

    const onMarkerDrag = event => {
      logDragEvent('onDrag', event);
    };

    const onMarkerDragEnd = (event, id) => {
      logDragEvent('onDragEnd', event);
      const item = this.state.markers.findIndex(x => x.id === id);
      this.setState(({ markers }) => ({
        markers: [
          ...markers.slice(0, item),
          {
            ...markers[item],
            longitude: event.lngLat[0],
            latitude: event.lngLat[1]
          },
          ...markers.slice(item + 1)
        ]
      }));
    };

    return (
      <>
        <InteractiveMap
          {...this.state.viewport}
          width="50vh"
          height="50vh"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onClick={handleClick}
        >
          {this.state.markers.length
            ? this.state.markers.map((m, i) => {
                // <Marker /> just places its children at the right lat lng.
                return (
                  <Marker
                    draggable
                    onDragStart={onMarkerDragStart}
                    onDrag={onMarkerDrag}
                    onDragEnd={event => onMarkerDragEnd(event, m.id)}
                    {...m}
                    key={i}
                  >
                    <Pin />
                  </Marker>
                );
              })
            : null}
        </InteractiveMap>
      </>
    );
  }
}

export default Map;
