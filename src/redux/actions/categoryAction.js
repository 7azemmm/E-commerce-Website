// Importing action type constants and custom hooks
import { GET_ALL_CATEGORY, GET_ERROR, CREATE_CATEGORY } from '../type'
import useGetData from '../../hooks/useGetData'
import { useInsertDataWithImage } from '../../hooks/useInsertData'

// Action creator for fetching all categories with a specified limit
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    // Call the useGetData hook to fetch data from the categories API endpoint with the specified limit
    const response = await useGetData(`/api/v1/categories?limit=${limit}`);

    // Dispatch the GET_ALL_CATEGORY action with the fetched data as the payload
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    })
  } catch (e) {
    // Dispatch the GET_ERROR action with the error message as the payload if there's an error
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    })
  }
}


