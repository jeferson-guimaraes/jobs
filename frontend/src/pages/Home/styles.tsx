import styled from "styled-components";
import { device } from "../../styles/breakpoint";
import { Link } from "react-router-dom";

export const Title = styled.h2`
    font-size: 25pt;
    margin-top: 2rem;
    margin-bottom: 2rem;
`
export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
    padding-bottom: 5rem;
`

export const Card = styled(Link)`
    flex: 0 0 100%;
    min-width: 200px;
    min-height: 150px;
    padding: 16px;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: #c9c9c968;
    text-decoration: none;
    color: inherit;
    transition: .5s;

    &:hover {
        background-image: linear-gradient(to right, var(--green), #00bb7d);
        color: #FFF;
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
`