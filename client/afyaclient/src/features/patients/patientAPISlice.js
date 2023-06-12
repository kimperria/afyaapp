import { apiSlice } from "../../app/api/apiSlice";

export const registerNewPatientSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerNewPatient: builder.mutation({
      query: (patientInformation) => ({
        url: "/api/new-patient/",
        method: "POST",
        body: patientInformation,
        headers: {
          "Content-Type": "application/json",
        },
      }),
      transformResponse: (response, meta, arg) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    postAppointmentDetail: builder.mutation({
      query: (patientId, appointmentInformation) => ({
        url: `/api/appointment/${patientId}`,
        method: "POST",
        body: appointmentInformation,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
    viewAllPatients: builder.query({
      query: () => ({
        url: "/api/patients/",
        method: "GET",
      }),
      transformResponse: (response, meta) => response.data,
      transformErrorResponse: (response, meta, arg) => response.status,
    }),
    viewPatientID: builder.query({
      query: (patientId) => ({
        url: `/api/patient/${patientId}`,
        method: "GET",
      }),
      transformResponse: (response, meta, arg) => response.data,
    }),
  }),
});

export const {
  useRegisterNewPatientMutation,
  usePostAppointmentDetailMutation,
  useViewAllPatientsQuery,
  useViewPatientIDQuery,
} = registerNewPatientSlice;
