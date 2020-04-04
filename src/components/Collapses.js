import ListOfMarkers from './ListOfMarkers';
import Map from './Map';
import React from 'react';

const Collapses = () => (
  <div
    id="accordion"
    role="tablist"
    aria-multiselectable="true"
    className="card-collapse accordion"
  >
    <div className="card card-plain">
      <div className="card-header" role="tab" id="headingOne">
        <a
          className="collapsed h3 arrowContainer"
          data-toggle="collapse"
          data-parent="#accordion"
          href="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Map
          <i className="now-ui-icons arrows-1_minimal-down arrow"></i>
        </a>
      </div>
      <div
        id="collapseOne"
        className="collapse show"
        role="tabpanel"
        aria-labelledby="headingOne"
      >
        <div className="card-body">
          <Map />
        </div>
      </div>
    </div>
    <div className="card card-plain">
      <div className="card-header" role="tab" id="headingTwo">
        <a
          className="collapsed h3 arrowContainer"
          data-toggle="collapse"
          data-parent="#accordion"
          href="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Markers
          <i className="now-ui-icons arrows-1_minimal-down arrow"></i>
        </a>
      </div>
      <div
        id="collapseTwo"
        className="collapse show"
        role="tabpanel"
        aria-labelledby="headingTwo"
      >
        <div className="card-body">
          <ListOfMarkers />
        </div>
      </div>
    </div>
  </div>
);

export default Collapses;
