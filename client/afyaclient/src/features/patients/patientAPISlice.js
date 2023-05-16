import { apiSlice } from "../../app/api/apiSlice";

export const registerNewPatientSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        registerNewPatient: builder.mutation({
            query: patientInformation => ({
                url: '/api/new-patient/',
                method: 'POST',
                body: patientInformation,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        postAppointmentDetail: builder.mutation({
            query: ( patientId,  appointmentInformation) => ({
                url: `/api/appointment/${patientId}`,
                method: 'POST',
                body: appointmentInformation,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }),
        viewAllPatients: builder.query({
            query: () => ({
                url: '/api/patients/',
                method: 'GET',
            }),
            transformResponse: async (response, meta) => {
                const status = meta.response?.status

                const data = await response;

                return { status, data};
            }
        })
    })
});

export const { useRegisterNewPatientMutation, usePostAppointmentDetailMutation, useViewAllPatientsQuery } = registerNewPatientSlice;
