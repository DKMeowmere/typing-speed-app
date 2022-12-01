import styled from "styled-components"

export const StyledContainer = styled.article`
	width: 100%;
	min-height: 100vh;
	position: relative;
	background: #454545;
	display: flex;
	flex-direction: center;
	align-items: center;
	flex-direction: column;
	gap: 40px;
`

export const InfoBar = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 200px;
	width: 80%;
	font-size: 4rem;
	font-weight: bold;
	color: #fff;
`
export const AppDescription = styled.div`
	font-size: 2rem;
	font-weight: bold;
	color: #fff;
`
export const MainText = styled.div`
	width: 80%;
	font-size: 1rem;
	text-align: justify;
	color: #fff;
	letter-spacing: 3px;
`
export const CurrentLetter = styled.div`
	font-size: 5rem;
	color: #fff;
	font-weight: bold;
`

function setLetterColor(letterValue: null | boolean) {
	if (letterValue === null) return ""
	if (letterValue) return "#00ee00"
	return "#ee0000"
}

type LetterType = {
	letterValue: boolean | null
}

export const Letter = styled.span<LetterType>`
	color: ${({ letterValue }) => setLetterColor(letterValue)};
	background-color: ${({ letterValue }) => setLetterColor(letterValue)}33;
`
