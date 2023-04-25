import { newPatientSlice } from "../../app/api/patientEndPoints";

export const registerNewPatientSlice = newPatientSlice.injectEndpoints({
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

export const { useRegisterNewPatientMutation } = registerNewPatientSlice;