// Importing the baseUrl from the '../Api/baseURL' module
import baseUrl from '../Api/baseURL'

const useGetData = async (url, parmas) => {
    // Making a POST request to the server using baseUrl.post
    const res = await baseUrl.get(url, parmas);
    return res.data;
}

export default useGetData;