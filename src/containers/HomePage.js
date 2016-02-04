import React from 'react';
import { connect } from 'react-redux';
import Breweries from '../components/cards/Breweries';
import DrinksList from '../components/cards/DrinksList';
import Inventory from '../components/cards/Inventory';

const HomePage = () => {
  return (
    <div className="cb__posts mdl-grid">
      <Breweries />
      <DrinksList />
      <Inventory />
    </div>
  );
};

export default connect()(HomePage);
