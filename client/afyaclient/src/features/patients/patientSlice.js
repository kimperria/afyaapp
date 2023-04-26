import { createSlice } from "@reduxjs/toolkit";

const patientSlice = createSlice({
    name: 'patient',
    initialState: {
        patientInformation: null,
        appointmentDetails: null
    },
    reducers: {
        registerNewPatient: (state, action) => {
            state.patientInformation = action.payload
        },

        patientVitalSection: (state, action) => {
            state.appointmentDetails = action.payload
        },
    }
});

export const { registerNewPatient, patientVitalSection } = patientSlice.actions;
export default patientSlice.reducer;