// import library
import { createSlice } from "@reduxjs/toolkit"

type initialAuthType = {
    isLoggedIn: boolean
    token: string
    expiry: number
}

type actionType = {
    payload: initialAuthType
}

const initialAuthState: initialAuthType = {
    isLoggedIn: false,
    token: "",
    expiry: 120000, //2 minutes
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state: initialAuthType, action: actionType) {
            const expiry = new Date(action.payload.expiry)
            const now = new Date()
            const remainingTime = expiry.getTime() - now.getTime()

            state.isLoggedIn = true
            state.expiry = remainingTime
            state.token = action.payload.token
            localStorage.setItem(
                "userData",
                JSON.stringify({
                    token: action.payload.token,
                    expiration: action.payload.expiry,
                })
            )
        },
        logout(state: initialAuthType) {
            state.isLoggedIn = false
            localStorage.removeItem("userData")
        },
        autoLogin(state: initialAuthType) {
            const userData = localStorage.getItem("userData")!
            const storedData = JSON.parse(userData)
            if (userData && storedData.token) {
                const expiry = new Date(storedData.expiration)
                const now = new Date()
                const remainingTime = expiry.getTime() - now.getTime()

                state.isLoggedIn = true
                state.token = storedData.token
                state.expiry = remainingTime
            } else {
                state.isLoggedIn = false
                localStorage.removeItem("userData")
            }
        },
    },
})
export const authActions = authSlice.actions

export default authSlice
