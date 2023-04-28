import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout, setAccessToken } from '../../features/auth/authSlice';
import Cookie from 'js-cookie';


const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    method: 'POST',
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

        // console.log('Header', token)

        return headers;
    },
});


const baseQueryReAuth = async (args, api, extraOptions) => {
    // console.log('This is a test')
    let results = await baseQuery(args, api, extraOptions)

    // check if access token is expires hit 
    // console.log('Result at basequery', results)
    // console.log('Extra options', extraOptions)
    if (results.meta.response?.status === 401){
        try{
            const refresh = JSON.parse(Cookie.get('token'))?.refresh 
            /// default toolkit practice
            const refreshResults = await baseQuery({url: '/api/token/refresh/', body: {refresh}}, api, extraOptions)
            // console.log('Refresh at basequery', refreshResults.data)
            //trigger a new access token
            api.dispatch(setAccessToken(refreshResults.data.refreshToken))
            // Proceed with original response 
            results = await baseQuery(args, api, extraOptions)

            // console.log(results)

            Cookie.set('token', JSON.stringify({'access': results.access, 'refresh': refresh}))

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