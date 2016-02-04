import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';
import beer from './beer';
import session from './session';

const rootReducer = combineReducers({
  session,
  beer,
  router: routerStateReducer,
  form: formReducer,
});

export default rootReducer;
