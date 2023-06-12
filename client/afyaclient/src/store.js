import { configureStore, getDefaultMiddleware, combineReducers } from "@reduxjs/toolkit";
import { apiSlice } from "./app/api/apiSlice";
import authReducer from './features/auth/authSlice';
import patientReducer from './features/patients/patientSlice';

export const store = configureStore({
    reducer: combineReducers({
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        patient: patientReducer,
    }),
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})