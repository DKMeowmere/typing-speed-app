import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitialState = {
	userText: string
	enteredCharsCount: number
	textToRewrite: string
	userTime: string
	seconds: number
	minutes: number
	isTimerStarted: boolean
	typingSpeed: number
	isGameEnded: boolean
}

const initialState: InitialState = {
	textToRewrite: "The Serbian Autonomous Oblast of Krajina (Serbo-Croatian: Srpska autonomna oblast Krajina or SAO Krajina was a self-proclaimed Serbian autonomous region (oblast) within modern-day Croatia (then a part of Yugoslavia). The territory consisted of majority-Serbian municipalities of the Republic of Croatia that declared autonomy in October 1990. It was formed as the SAO Kninska Krajina, but, upon inclusion of additional Serb-populated areas, changed its name simply to SAO Krajina. In 1991 the SAO Krajina declared itself the Republic of Serbian Krajina, and subsequently included the other two Serbian SAOs in Croatia, the SAO Western Slavonia and the SAO Eastern Slavonia, Baranja and Western Syrmia.",
	enteredCharsCount: 0,
	userText: "",
	userTime: "00:00",
	seconds: 0,
	minutes: 0,
	typingSpeed: 0,
	isTimerStarted: false,
	isGameEnded: false,
}

const typingSlice = createSlice({
	initialState,
	name: "typing program slice",
	reducers: {
		handleTyping: (state, action: PayloadAction<{ key: string }>) => {
			const key = action.payload.key
			const userText = state.userText

			if (key === "Backspace") {
				state.userText = userText.slice(0, userText.length - 1)
				if (state.enteredCharsCount > 0) state.enteredCharsCount--
				return
			}

			if (key.length > 1) return
			state.enteredCharsCount++
			state.userText += key
		},
		incrementTime: state => {
			let seconds = Math.floor(state.seconds).toString()
			let minutes = Math.floor(state.minutes).toString()

			if (!state.isTimerStarted) {
				return
			}

			if (state.seconds === 60) {
				state.seconds = 0
				state.minutes++
			}

			if (state.seconds < 10) {
				seconds = "0" + seconds
			}

			if (state.minutes < 10) {
				minutes = "0" + minutes
			}

			state.userTime = `${minutes}:${seconds}`
			const userTypingSpeed = Math.floor(
				(state.enteredCharsCount /
					(state.seconds + state.minutes * 60)) *
					60
			)

			state.typingSpeed =
				userTypingSpeed !== Infinity ? userTypingSpeed : 0
			state.seconds += 0.25
		},
		startGame: state => {
			state.isGameEnded = false
		},
		startTimer: state => {
			state.isTimerStarted = true
			state.seconds = 0
			state.minutes = 0
			state.userTime = ""
			state.typingSpeed = 0
		},
		endGame: state => {
			state.isTimerStarted = false
			state.isGameEnded = true
			state.userText = ""
			state.enteredCharsCount = 0
		},
	},
})

export default typingSlice.reducer
export const { handleTyping, incrementTime, startGame, startTimer, endGame } =
	typingSlice.actions
