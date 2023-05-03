import { createSlice } from '@reduxjs/toolkit';


import Cookie from 'js-cookie';

const token = Cookie.get('token')
const accessToken = token ? JSON.parse(token) : {} 
// console.log(token)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken:accessToken.access,
        refreshToken: accessToken.refresh,
        isAuthenticated: false
    },
    reducers: {
        // action creators
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        },
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        },
        logout: (state, action) => {
            state.accessToken = null,
            state.refreshToken = null,
            state.isAuthenticated = false
        }
    } 
});

export const { setAccessToken, setRefreshToken, setIsAuthenticated, logout } = authSlice.actions; //access individual action creator func
export default authSlice.reducer; //for store config