import styled from "styled-components"

export const EndModalContainer = styled.div`
	width: 90%;
	max-width: 500px;
	padding: 50px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	position: absolute;
	top: 50%;
	left: 50%;
	translate: -50% -50%;
	background-color: #565656;
	box-shadow: 0 0 50px 5px;
	border-radius: 20px;
	color: #fff;
	p {
		font-size: 2rem;
	}
	button {
		width: 80%;
		height: 60px;
		cursor: pointer;
		color: #fff;
		background-color: #4169e1;
		border-radius: 20px;
		border: none;
		opacity: 0.9;
		&:hover {
			opacity: 1;
		}
	}
`
