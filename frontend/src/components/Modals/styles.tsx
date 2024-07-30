import styled from "styled-components"
import Modal from 'react-modal'

export const StyledModal = styled(Modal)`
	background-color: #FFF;
	color: var(--light-black);
	border: 3px solid var(--green);
	border-radius: 4px;
	padding: 20px;
	max-width: 500px;
	margin: 10% auto;
`

export const ModalTitle = styled.h2`
	font-size: 20pt;
	margin-bottom: 2rem;
	text-align: center;
`

export const ButtonConfirm = styled.button`
	font-size: 13pt;
  padding: .5rem .8rem;
  background-color: #00b679dd;
  color: #FFF;
  border: none;
  display: flex;
  gap: .4rem;
  border-radius: 2px;
  transition: .4s;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: #008060;
  }
`

export const ButtonCancel = styled(ButtonConfirm)`
  background-color: var(--light-black);

  &:hover {
    background-color: #1f1f1f;
  }
`

export const TextModal = styled.p`
  font-size: 13pt;
  text-align: center;
`