import { createSlice } from "@reduxjs/toolkit";
import getLocalStorageItem from "../components/functions";


const initialState = {
    username: getLocalStorageItem("username"),
    accessToken: getLocalStorageItem("accessToken"),
    refreshToken: getLocalStorageItem("refershToken"),
    isAuthenticated: getLocalStorageItem("isAuthenticated",true),
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, access, refresh, isAuthenticated } = action.payload
            state.accessToken = access
            state.refreshToken = refresh
            state.username = username
            state.isAuthenticated = isAuthenticated

            localStorage.setItem('username', username)
            localStorage.setItem('accessToken', access)
            localStorage.setItem('refreshTokem', refresh)
            localStorage.setItem('isAuthenticated', isAuthenticated)
        },
        logout: (state, action) => {
            localStorage.clear()
            state.isAuthenticated = false
        },
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer;