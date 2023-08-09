import { createStore, combineReducers } from 'redux';
import lightsReducer from './reducer/reducers'; // Import your lightsReducer

const rootReducer = combineReducers({
  lights: lightsReducer,
  // Add other reducers here if needed
});

const store = createStore(rootReducer);

export default store;
