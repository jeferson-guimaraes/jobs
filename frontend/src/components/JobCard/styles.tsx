import { Link } from "react-router-dom";
import { device } from "../../styles/breakpoint";
import styled from "styled-components";

export const Card = styled(Link)`
	flex: 0 0 100%;
	min-width: 200px;
	min-height: 150px;
	padding: 16px;
	box-sizing: border-box;
	border-radius: 2px;
	background-color: #000000b9;
	text-decoration: none;
	color: inherit;
	transition: .5s;
	color: #FFF;

	&:hover{
		background-image: linear-gradient(to right, var(--green), #00bb7d);
		
		svg {
			color: #FFF;
		}
	}
	
	@media ${device.sm} {
		flex: 0 0 48%;
	}

	@media ${device.md} {
		flex: 0 0 30%;
	}

	@media ${device.lg} {
		flex: 0 0 32%;
	}
`

export const CardTitle = styled.h3`
	font-size: 1.1rem;
	margin-bottom: 1rem;
	color: #FFF;
`

export const TextCard = styled.div`
	margin-bottom: .5rem;
	display: flex;
	gap: .2rem;
	font-size: .85rem;
	align-items: center;
`