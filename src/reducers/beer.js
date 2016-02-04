import { INCREMENT_COUNTER, DECREMENT_COUNTER, LOGOUT_USER } from '../constants';
import { fromJS } from 'immutable';
import breweries from '../breweries.json';

const INITIAL_STATE = fromJS({
  breweries,
});

function beerReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return state.update('count', (value) => value + 1);

  case DECREMENT_COUNTER:
    return state.update('count', (value) => value - 1);

  case LOGOUT_USER:
    return state.merge(INITIAL_STATE);

  default:
    return state;
  }
}

export default beerReducer;
