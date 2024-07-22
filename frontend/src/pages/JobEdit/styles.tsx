import styled from "styled-components"

export const ButtonSave = styled.input`
  width: 100%;
  font-size: 15pt;
  padding: .5rem .8rem;
  background-color: #00b679dd;
  color: #FFF;
  border: none;
  display: flex;
  gap: .4rem;
  margin-top: 1.5rem;
  border-radius: 2px;
  transition: .4s;

  &:hover {
    background-color: #008060;
  }
`

export const Label = styled.label`
  display: block;
  font-weight: 500;
  font-size: 15pt;
  margin-bottom: 5px;
`

export const FormGroup = styled.div`
  padding: 0;
  margin-bottom: 20px;
`