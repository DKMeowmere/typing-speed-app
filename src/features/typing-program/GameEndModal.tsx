import React from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { EndModalContainer } from "./GameEndModal.styles"
import { startGame } from "./typingSlice"

export default function GameEndModal() {
	const userScore = useAppSelector(state => state.typingTest.typingSpeed)
	const UserTime = useAppSelector(state => state.typingTest.userTime)
	const dispatch = useAppDispatch()

	return (
		<EndModalContainer>
			<>
				<p>Twój wynik: {userScore} znaków/min</p>
				<p>Czas: {UserTime}</p>
				<button onClick={() => dispatch(startGame())}>
					Zacznij od nowa
				</button>
			</>
		</EndModalContainer>
	)
}
