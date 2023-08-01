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
      query: (patient_id) => ({
        url: `/api/appointment/create/${patient_id}/`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: 
          {
            "height": 2,
            "weight": [
                "This field is required."
            ],
            "body_mass_index": [
                "This field is required."
            ],
            "patient_id": [
                "This field is required."
            ]
        }
        
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
