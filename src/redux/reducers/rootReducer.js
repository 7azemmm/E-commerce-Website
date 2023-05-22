import {combineReducers} from 'redux'//imports the combineReducers function from the Redux library.
import categoryReducer from './categoryReducer'//imports the categoryReducer from the categoryReducer.js file 

export default combineReducers ({//exports a default function
    allCategory:categoryReducer ,//the object has  allCategory(property) which represents a piece of state managed by the categoryReducer.
}) 