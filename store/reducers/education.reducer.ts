// import library
import { createSlice } from "@reduxjs/toolkit"
import { EducationType } from "types/education.type"
import axios from "axios"

type actionType = {
    payload: EducationType
}

const initialState: EducationType[] = []

const authSlice = createSlice({
    name: "authentication",
    initialState: initialState,
    reducers: {
        save(state: EducationType[], action: actionType) {
            axios.post("api/education", action.payload)
        },
        setData(state: EducationType[], action: { payload: EducationType[] }) {
            state = Object.assign(state, action.payload)
        },
    },
})
export const educationAction = authSlice.actions

export default authSlice
