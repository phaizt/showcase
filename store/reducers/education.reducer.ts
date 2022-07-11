// import library
import { createSlice } from "@reduxjs/toolkit"

type initialAuthType = {
    school_name: string
    degree: string
    field_of_study: string
    start_year: Date
    end_year: Date
    grade: string
    description: string
}

type actionType = {
    payload: initialAuthType
}

const initialAuthState: initialAuthType = {
    school_name: "",
    degree: "",
    field_of_study: "",
    start_year: new Date,
    end_year: new Date,
    grade: "",
    description: "",
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        
    },
})
export const authActions = authSlice.actions

export default authSlice
