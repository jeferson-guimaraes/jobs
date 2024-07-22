import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px 0 0 4px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: #aaa;
  }
`;

export const StyledButton = styled.button`
  background-color: var(--green);
  color: #FFF;
  padding: .7rem .9rem;
  border: 1px solid var(--green);
  border-radius: 0 4px 4px 0;
  display: flex;
  transition: .4s;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
  }
`;