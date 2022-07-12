// import library
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { EducationType } from "types/education.type"
import axios from "axios"

export const save = createAsyncThunk("educations/saveEducation", async (action: actionType, thunkAPI) => {
    const response = await axios.post("api/education", action.payload)
    return response.data
})

type actionType = {
    payload: EducationType
}

const initialState: EducationType[] = []

const authSlice = createSlice({
    name: "educations",
    initialState: initialState,
    reducers: {
        setData(state: EducationType[], action: { payload: EducationType[] }) {
            state = Object.assign(state, action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(save.fulfilled, (state, action) => {
            state.unshift(action.payload.data)
        })
    },
})
export const educationAction = authSlice.actions

export default authSlice
