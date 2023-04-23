import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, setAccessToken } from '../../features/auth/authSlice';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    /// handles data sent to the backend
    // safe practise
    prepareHeaders: (
        headers,{
            getState
        }
    ) => {
        const token = getState().auth.accessToken
        if (token){
            headers.set(
                'Authorization', `Bearer ${token}`,
            )
        }

        return headers;
    }
});


const baseQueryReAuth = async (args, api, extraOptions) => {
    let results = await baseQuery(args, api,extraOptions)

    // check if access token is expires hit 

    if (results.meta.response?.status === 401 || 403){
        try{
            /// default toolkit practice
            const refreshResults = await baseQuery('/api/token/refresh/', api, extraOptions)
            //trigger a new access token
            api.dispatch(setAccessToken(refreshResults.data.accessToken))
            // Proceed with original response 
            results = await baseQuery(args, api, extraOptions)

        }catch (error) {
            api.dispatch(logout)
        }
    }

    return results;
}


export const apiSlice = createApi({
    reducerPath: 'authSlice',
    baseQuery: baseQueryReAuth,
    endpoints: builder => ({}),
    // clear cache
    // keepUnusedDataFor
})