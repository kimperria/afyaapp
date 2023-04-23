import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken:null,
        refreshToken:null
    },
    reducers: {
        // action creators
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        },
        logout: (state, action) => {
            state.accessToken = null,
            state.refreshToken = null
        }
    } 
});

export const { setAccessToken, setRefreshToken, logout } = authSlice.actions; //access individual action creator func
export default authSlice.reducer; //for store config