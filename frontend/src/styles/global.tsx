import { createGlobalStyle, styled } from "styled-components"
import { device } from "../styles/breakpoint";

export default createGlobalStyle`
	:root{
		--black: #1d1d1d;
		--light-black: #555555;
		--green: #00b679;
		--green-shadow: #00b679c3;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		color: var(--light-black);
		font-size: 14px;
		font-family: "Poppins", sans-serif;
	}

	a {
		text-decoration: none;
	}

	h1,
	h2,
	h3{
		color: #222222;
	}

	input,
	textarea {
		color: var(--light-black);
	}

	form {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.largeIcon{
		font-size: 1.2rem;
		margin-right: 1rem;
	}

	.cardIcon{
		color: var(--green);
		font-size: 1.2rem;
		margin-right: 10px;
	}

	.buttonIcon{
		font-size: 12pt;
	}

	.Overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 100;
  	background: rgba(0, 0, 0, 0.8);
	}

	.modalIcon{
		color: var(--green)
	}
`

export const Main = styled.div`
	min-height: 100vh;
	width: 100%;
`

export const Jumbotrom = styled.div`
	display: flex;
	justify-content: center;
	padding: 0;
`

interface ContainerProps {
	display?: string,
	height?: string,
	width?: string,
	background?: string,
	$padding?: string,
	$margin?: string
	$textalign?: string,
	$justify?: string
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: ${props => props.height || '100%'};
    width: ${props => props.width || '100%'};
    padding: ${props => props.$padding || '0 1rem'};
		margin: ${props => props.$margin || '0'};
    display: ${props => props.display || 'block'};
    align-items: center;
    background: ${props => props.background || 'none'};
    text-align: ${props => props.$textalign || 'initial'};
		justify-content: ${props => props.$justify || 'initial'};

    @media ${device.md} {
        max-width: 1024px;
    }
`

export const Input = styled.input`
    width: 100%;
    padding: .5rem .8rem;
    border: none;
    border-radius: 2px;
`

