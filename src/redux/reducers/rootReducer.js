import {combineReducers} from 'redux'//imports the combineReducers function from the Redux library.
import categoryReducer from './categoryReducer'//imports the categoryReducer from the categoryReducer.js file 
import brandReducer from './brandReducer'//imports the categoryReducer from the brandReducer.js file 
import subcategoryReducer from './subcategoryReducer'
export default combineReducers ({//exports a default function
    allCategory:categoryReducer ,//the object has  allCategory(property) which represents a piece of state managed by the categoryReducer.
    allBrand: brandReducer,
    subCategory: subcategoryReducer
}) 
///root reducer