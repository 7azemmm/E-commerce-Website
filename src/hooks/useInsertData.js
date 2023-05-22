// Importing the baseUrl from the '../Api/baseURL' module
import baseUrl from '../Api/baseURL'

// Function for inserting data with an image 
const useInsertDataWithImage = async (url, params) => { 
  // Configuration object with headers for multipart/form-data which is used to upload files
  const config = {
    headers: { "Content-Type": "multipart/form-data" }
  };

  // Making a POST request to the server using baseUrl.post
  const res = await baseUrl.post(url, params, config);

  // Logging the status of the response to the console
  console.log(res.status);

  // Returning the response object
  return res;
}

// Function for inserting data without an image
const useInsertData = async (url, params) => {
  // Making a POST request to the server using baseUrl.post
  const res = await baseUrl.post(url, params);

  // Returning the response object
  return res;
}

// Exporting the useInsertData and useInsertDataWithImage functions
export { useInsertData, useInsertDataWithImage };

