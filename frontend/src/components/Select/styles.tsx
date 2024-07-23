import styled from "styled-components"

export const StyledSelect = styled.select`
	background-color: #FFFFFF;
  border: 1px solid #CCCCCC; 
  padding: 10px; 
  color: var(--light-black);
  font-size: 16px; 
  border-radius: 4px; 
  width: 100%; 
  box-sizing: border-box; 
  outline: none; 
  transition: border-color 0.3s;

  &:focus{
    border-color: var(--green);
    box-shadow: 1px 1px 5px var(--green-shadow);
  }
`