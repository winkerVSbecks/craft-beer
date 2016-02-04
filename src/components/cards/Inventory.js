import React from 'react';

const BOTTLES = require('../../img/bottles.jpg');

const Inventory = () => {
  return (
    <div className="mdl-card on-the-road-again mdl-cell mdl-cell--12-col">
      <div className="mdl-card__media mdl-color-text--grey-50 reyes"
        style={{
          backgroundColor: '#343438',
          backgroundImage: `url('${ BOTTLES }')`,
          backgroundPosition: '0% 56%',
        }}>
        <h3><a href="entry.html">The Inventory</a></h3>
      </div>
    </div>
  );
};

export default Inventory;
