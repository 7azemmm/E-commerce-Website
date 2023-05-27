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





