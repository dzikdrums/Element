import React, { useEffect, useState } from 'react';
import { getMarkers, removeMarker } from '../redux/mapRedux';

import { connect } from 'react-redux';

const idStyle = {
  verticalAlign: 'middle',
  textAlign: 'center',
  padding: '0'
};

const ListOfMarkers = ({ markers, removeMarker }) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 480);

  const handleWindowResize = () => {
    setMobile(window.innerWidth < 480);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [markers, isMobile]);

  const handleRemoveMarker = id => {
    removeMarker(id);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="text-center">id</th>
            <th>Longitude</th>
            <th>Latitude</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {markers.map(({ id, longitude, latitude }) => {
            return (
              <tr key={id}>
                <td className="id">{id}</td>
                <td className="tableRow">
                  {isMobile ? longitude.toFixed(5) : longitude}
                </td>
                <td className="tableRow">
                  {isMobile ? latitude.toFixed(5) : latitude}
                </td>
                <td className="td-actions text-right">
                  <button
                    type="button"
                    rel="tooltip"
                    onClick={() => handleRemoveMarker(id)}
                    className="btn btn-danger"
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  markers: getMarkers(state)
});

const mapDispatchToProps = dispatch => ({
  removeMarker: id => dispatch(removeMarker(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListOfMarkers);
