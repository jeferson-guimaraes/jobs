import { createGlobalStyle, styled } from "styled-components"
import { device } from "../styles/breakpoint";

export default createGlobalStyle`
	:root{
		--black: #1d1d1d;
		--green: #00b679;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		color: #1d1d1d;
		font-size: 16px;
		font-family: "Montserrat", sans-serif;
		font-weight: 400;
	}

	a {
		text-decoration: none;
	}

	.cardIcon{
		color: var(--green);
		font-size: 1.2rem;
		padding-right: 5px;
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
	background?: string,
	padding?: string,
	textalign?: string,
	justify?: string
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: ${props => props.height || '100%'};
    padding: ${props => props.padding || '0 1rem'};
    display: ${props => props.display || 'block'};
    align-items: center;
    background: ${props => props.background || 'none'};
    text-align: ${props => props.textalign || 'initial'};
	justify-content: ${props => props.justify || 'initial'};

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

