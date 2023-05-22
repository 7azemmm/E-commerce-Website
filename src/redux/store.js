import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// Define initial state for the Redux store
const initialState = {};

// Create an array of middlewares with 'thunk'
const middleware = [thunk];

// Create the Redux store
const store = createStore(
  rootReducer, // Root reducer that combines all reducers
  initialState, // Initial state for the store
  composeWithDevTools(applyMiddleware(...middleware)) // Enhance store with middleware and devtools
);

// Export the created store as the default export
export default store;
