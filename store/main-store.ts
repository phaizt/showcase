// import library
import { configureStore } from "@reduxjs/toolkit";

// import reducers
import authReducer from "store/reducers/authReducer";

const store = configureStore({
	reducer: { auth: authReducer.reducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
