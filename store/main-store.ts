// import library
import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector } from "react-redux"

// import reducers
import Education from "store/reducers/education.reducer"

const store = configureStore({
    reducer: { educations: Education.reducer },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector = () => useSelector((state: RootState) => state)
