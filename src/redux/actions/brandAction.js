import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND } from '../type'
import useGetData from '../../hooks/useGetData'
import { useInsertDataWithImage } from '../../hooks/useInsertData'

// Action creator: Fetch all brands
export const getAllBrand = (limit) => async (dispatch) => {
  try {
    // Call the custom hook useGetData to fetch all brands with the specified limit
    const response = await useGetData(`/api/v1/brands?limit=${limit}`);

    // Dispatch the fetched brands to the Redux store using the GET_ALL_BRAND type
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    })
  } catch (e) {
    // Dispatch an error action if an error occurs during the API request
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    })
  }
}

// Action creator: Fetch brands with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/v1/brands?limit=4&page=${page}`);

    // Dispatch the fetched brands to the Redux store using the GET_ALL_BRAND type
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    })
  } catch (e) {
    
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    })
  }
}

// Action creator: Create a new brand
export const createBrand = (formData) => async (dispatch) => {
  try {
    // Call the custom hook useInsertDataWithImage to send the formData and create a new brand
    const response = await useInsertDataWithImage(`/api/v1/brands`, formData);

    // Dispatch the created brand to the Redux store using the CREATE_BRAND type
    dispatch({
      type: CREATE_BRAND,
      payload: response,
      loading: true
    })
  } catch (e) {
    // Dispatch an error action if an error occurs during the API request
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    })
  }
}





