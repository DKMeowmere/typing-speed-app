import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
	AppDescription,
	CurrentLetter,
	InfoBar,
	Letter,
	MainText,
	StyledContainer,
} from "./Container.styles"
import {
	endGame,
	handleTyping,
	incrementTime,
	startGame,
	startTimer,
} from "./typingSlice"
import { v4 as uuidv4 } from "uuid"
import GameEndModal from "./GameEndModal"

export default function Container() {
	const dispatch = useAppDispatch()
	const textToRewrite = useAppSelector(
		state => state.typingTest.textToRewrite
	)
	const enteredCharsCount = useAppSelector(
		state => state.typingTest.enteredCharsCount
	)
	const userText = useAppSelector(state => state.typingTest.userText)
	const typingSpeed = useAppSelector(state => state.typingTest.typingSpeed)
	const UserTime = useAppSelector(state => state.typingTest.userTime)
	const isTimerStarted = useAppSelector(
		state => state.typingTest.isTimerStarted
	)
	const isGameEnded = useAppSelector(state => state.typingTest.isGameEnded)

	function compareUserValueToMainText(charIndex: number) {
		if (!userText.charAt(charIndex)) return null
		if (userText.charAt(charIndex) === textToRewrite.charAt(charIndex)) {
			return true
		}
		return false
	}

	function handleKeyPress(e: KeyboardEvent) {
		if (isGameEnded) return

		if (!isTimerStarted) {
			dispatch(startGame())
			dispatch(startTimer())
			setInterval(() => {
				dispatch(incrementTime())
			}, 250)
		}

		if (textToRewrite.length - 1 === enteredCharsCount) {
			dispatch(endGame())
			return
		}
		dispatch(handleTyping({ key: e.key }))
	}

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress)
		return () => document.removeEventListener("keydown", handleKeyPress)
	})

	return (
		<StyledContainer>
			{isGameEnded && <GameEndModal />}
			<InfoBar>
				<div className="user-speed">{typingSpeed} znaków/min</div>
				<div className="timer">{UserTime}</div>
			</InfoBar>
			<AppDescription>
				Zacznij pisać aby rozpocząć test na szybkie pisanie
			</AppDescription>
			<CurrentLetter>
				"{textToRewrite.charAt(enteredCharsCount)}"
			</CurrentLetter>
			<MainText>
				{textToRewrite.split("").map((char, index) => (
					<Letter
						letterValue={compareUserValueToMainText(index)}
						key={uuidv4()}
					>
						{char}
					</Letter>
				))}
			</MainText>
		</StyledContainer>
	)
}
