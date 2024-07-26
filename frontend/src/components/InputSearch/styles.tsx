import styled from "styled-components"
import { Input } from "../../styles/global"

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled(Input)`
  max-width: 50%;
  padding: .8rem 1.1rem;
`

export const StyledButton = styled.button`
  background-color: var(--green);
  padding: .7rem .9rem;
  border: none;
  border-radius: 2px;
  margin-left: 1rem;
  display: flex;
  transition: .4s;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`