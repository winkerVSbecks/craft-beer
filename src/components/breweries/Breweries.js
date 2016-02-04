
import React from 'react';

const Breweries = ({ breweries }) => {
  const breweriesList = breweries.map((brewery, idx) => {
    return (
      <div key={ idx }>
        <h3> { brewery.get('name') }</h3>
        <ul>
          <li>{ brewery.get('contact') }</li>
          <li>ordering:
            <ul>
              <li>{ brewery.get('ordering').get('info') }</li>
              <li>{ brewery.get('ordering').get('minimum') }</li>
              <li>{ brewery.get('ordering').get('shipping') }</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div className="flex">
      <div className="flex-auto flex-center">
        { breweriesList }
      </div>
    </div>
  );
};


export default Breweries;
