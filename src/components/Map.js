import { GeolocateControl, InteractiveMap, Marker } from 'react-map-gl';
import React, { Component } from 'react';
import { addMarker, editMarker, getMarkers } from '../redux/mapRedux';

import Pin from './Pin';
import { connect } from 'react-redux';

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
    events: {}
  };

  setViewport = viewport => {
    this.setState({
      viewport: viewport
    });
  };

  handleClick = ({ lngLat: [longitude, latitude] }) => {
    let id;
    if (!this.props.markers.length) {
      id = 0;
    } else {
      id = this.props.markers[this.props.markers.length - 1].id + 1;
    }
    this.props.addMarker({ id: id, longitude, latitude });
  };

  logDragEvent = (name, event) => {
    this.setState({
      events: this.state.events
    });
    this.setState({
      ...this.state.events,
      [name]: event.lngLat
    });
  };

  onMarkerDragStart = event => {
    this.logDragEvent('onDragStart', event);
  };

  onMarkerDrag = event => {
    this.logDragEvent('onDrag', event);
  };

  onMarkerDragEnd = (event, id) => {
    this.logDragEvent('onDragEnd', event);
    this.props.editMarker({
      id: id,
      longitude: event.lngLat[0],
      latitude: event.lngLat[1]
    });
  };

  render() {
    const { markers } = this.props;

    return (
      <div className="map">
        <InteractiveMap
          {...this.state.viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={this.setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onClick={this.handleClick}
        >
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
            className="geolocate"
          />
          {markers.length
            ? markers.map((m, i) => {
                return (
                  <Marker
                    draggable
                    onDragStart={this.onMarkerDragStart}
                    onDrag={this.onMarkerDrag}
                    onDragEnd={event => this.onMarkerDragEnd(event, m.id)}
                    {...m}
                    key={i}
                  >
                    <Pin id={m.id} />
                  </Marker>
                );
              })
            : null}
        </InteractiveMap>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  markers: getMarkers(state)
});

const mapDispatchToProps = dispatch => ({
  addMarker: marker => dispatch(addMarker(marker)),
  editMarker: (id, longitude, latitude) =>
    dispatch(editMarker(id, longitude, latitude))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
