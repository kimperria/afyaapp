import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    method: 'POST',
    prepareHeaders: (
        headers, {
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
    },
    
})


export const newPatientSlice = createApi({
    reducerPath: 'patientSlice',
    baseQuery: baseQuery,
    endpoints: builder => ({}),
})
