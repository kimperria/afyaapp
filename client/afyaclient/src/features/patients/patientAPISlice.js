import { apiSlice } from "../../app/api/apiSlice";

export const registerNewPatientSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        registerNewPatient: builder.mutation({
            query: patientInformation => ({
                url: '/api/patient/',
                method: 'POST',
                body: patientInformation,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
});

export const { usePatientRegistrationMutation } = registerNewPatientSlice;