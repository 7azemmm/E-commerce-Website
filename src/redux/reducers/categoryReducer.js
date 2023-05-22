
// Importing action type constants
import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from '../type'

// Initial state for the category reducer
const initial = {
  category: [],
  loading: true,
}

// Category reducer function
const categoryReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      // Updating state when the GET_ALL_CATEGORY action is dispatched
      return {
        ...state, //helps to create a new state object that incorporates the previous state's properties and values
        category: action.payload,
        loading: false,
      }
    case CREATE_CATEGORY:
      // Updating state when the CREATE_CATEGORY action is dispatched
      return {
        category: action.payload,
        loading: false,
      }
    case GET_ERROR:
      // Updating state when the GET_ERROR action is dispatched
      return {
        loading: true,
        category: action.payload,
      }
    default:
      // Returning the current state for any other action
      return state;
  }
}

export default categoryReducer;
