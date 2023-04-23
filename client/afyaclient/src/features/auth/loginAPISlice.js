import { apiSlice } from "../../app/api/apiSlice";

export const loginAPISlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/api/token/',
                method: 'POST',
                body: credentials,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
});


export const { useLoginMutation } = loginAPISlice;