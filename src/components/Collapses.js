import Map from './Map';
import React from 'react';

const Collapses = () => {
  return (
    <>
      <div
        id="accordion"
        role="tablist"
        aria-multiselectable="true"
        className="card-collapse"
      >
        <div className="card card-plain">
          <div className="card-header" role="tab" id="headingOne">
            <a
              className="collapsed"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Collapsible Group Item #1
              <i className="now-ui-icons arrows-1_minimal-down"></i>
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
              className="collapsed"
              data-toggle="collapse"
              data-parent="#accordion"
              href="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Collapsible Group Item #2
              <i className="now-ui-icons arrows-1_minimal-down"></i>
            </a>
          </div>
          <div
            id="collapseTwo"
            className="collapse show"
            role="tabpanel"
            aria-labelledby="headingTwo"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapses;
