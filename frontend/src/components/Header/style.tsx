import styled from "styled-components";
import { device } from "../../styles/breakpoint";
import { Link } from "react-router-dom";
import { Input } from "../../styles/global";

export const Capa = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 28rem;
  background-image: url("/capa.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: #FFF;
  
  
  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.7;
  z-index: 1;
  }
  
  & > * {
    position: relative;
    z-index: 2;
  }
`

export const Navbar = styled.nav`
  width: 100%;
  color: #FFF;
  display: flex;
  justify-content: center;
  font-size: 12pt;
  height: 4rem;
  align-items: center;
  background: transparent;
  border-bottom: 2px solid #858585;
  position: absolute;
  top: 0;
  z-index: 3;

  >div {
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media ${device.md} {
        max-width: 1024px;
    }
  }
`
export const LogoLink = styled(Link)`
  font-family: "MuseoModerno", sans-serif;
  font-weight: 900;
  font-size: 38px;
  font-style: italic;
  color: #FFF;
`

export const ButtonNew = styled(Link)`
  font-size: 10pt;
  padding: .5rem .8rem;
  background-color: #6464645a;
  color: #FFF;
  border: none;
  display: flex;
  gap: .4rem;
  border-radius: 2px;
  transition: .4s;

  &:hover {
    transform: scale(1.1);
  }
`

export const Form = styled.form`
  display: flex;
  gap: .5rem;
`

export const Title = styled.h2`
  font-size: 25pt;
  padding-bottom: 1rem;
  font-weight: 500;
`

export const SubTitle = styled.h3`
  font-size: 18pt;
  margin-top: 2.5rem;
  font-weight: 500;
`

export const InputSearch = styled(Input)`
  max-width: 50%;
  padding: .8rem 1.1rem;
`
export const ButtonSearch = styled(Link)`
  background-color: var(--green);
  padding: .7rem .9rem;
  border-radius: 2px;
  margin-left: 1rem;
  display: flex;
  transition: .4s;

  &:hover{
    transform: scale(1.1);
  }
`
