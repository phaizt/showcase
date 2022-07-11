// import library
import { createSlice } from "@reduxjs/toolkit"
import { EducationType } from "types/education.type"
import axios from "axios"

type actionType = {
    payload: EducationType
}

const initialAuthState: EducationType = {
    school: "",
    degree: "",
    field_of_study: "",
    start_year: "",
    end_year: "",
    grade: "",
    description: "",
}

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        save(state: EducationType, action: actionType) {
            axios.post("api/education", action.payload).then((res) => {
                console.log(res.data)
            })
        },
        setData(state: EducationType, action: { payload: { id: string } }) {
            const data = localStorage.getItem("education")
            state = JSON.parse(data as string)
        },
    },
})
export const educationAction = authSlice.actions

export default authSlice
