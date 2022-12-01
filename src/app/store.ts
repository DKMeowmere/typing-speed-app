import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import typingSlice from "../features/typing-program/typingSlice"

export const store = configureStore({
	reducer: {
		typingTest: typingSlice,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
