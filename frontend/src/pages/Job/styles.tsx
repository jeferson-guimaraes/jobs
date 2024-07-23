import styled from "styled-components"
import { Link } from "react-router-dom"

export const SubTitle = styled.h3`
  font-size: 18pt;
  margin-top: 2.5rem;
  font-weight: 500;
`

export const JobText = styled.div`
  margin-top: 1rem;
  white-space: pre-wrap;
`

export const ButtonEdit = styled(Link)`
  font-size: 10pt;
  padding: .5rem .8rem;
  background-color: #00b679dd;
  color: #FFF;
  border: none;
  display: flex;
  gap: .4rem;
  border-radius: 2px;
  transition: .4s;

  &:hover {
    transform: scale(1.1);
    background-color: #008060;
  }
`
export const ButtonDelete = styled(Link)`
  font-size: 10pt;
  padding: .5rem .8rem;
  background-color: #ff0000b2;
  color: #FFF;
  border: none;
  display: flex;
  gap: .4rem;
  border-radius: 2px;
  transition: .4s;
  margin-left: .5rem;
  display: flex;

  &:hover {
    transform: scale(1.1);
    background-color: #F00;
  }
`