import React from 'react';

const BAR = require('../../img/bar.jpg');

const Breweries = () => {
  return (
    <div className="mdl-card coffee-pic mdl-cell mdl-cell--8-col">

      <div className="mdl-card__media mdl-color-text--grey-50 clarendon"
        style={{
          backgroundImage: `url('${ BAR }')`,
          backgroundPosition: '50% 100%',
        }}>
        <h3><a href="entry.html">Local Brew</a></h3>
      </div>

      <div className="mdl-card__supporting-text meta">
        <div className="mdl-color-text--grey-600">
          Ontario Craft Breweries That Deliver to Downtown Toronto
        </div>
        <div className="mdl-layout-spacer"></div>
        <i className="material-icons mdl-color-text--grey-400">
          directions_car
        </i>
      </div>

    </div>
  );
};

export default Breweries;
