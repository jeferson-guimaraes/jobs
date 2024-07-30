import { ButtonCancel, ButtonConfirm, ModalTitle, StyledModal, TextModal } from "../styles"
import { ConfirmationModalProps } from "../../../types/modal"
import { Container } from "../../../styles/global"
import { IoAlertCircle } from "react-icons/io5"

StyledModal.setAppElement('#root')

const ConfirmationModal = ({ isOpen, onRequestClose, onConfirm, message }: ConfirmationModalProps) => {
	return (
		<StyledModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel="Confirmation Modal"
			className="Modal"
			overlayClassName="Overlay"
		>
			<ModalTitle>
				<IoAlertCircle size={70} className="modalIcon" />
			</ModalTitle>
			<Container display="flex" $justify="center" $margin="30px 0">
				<TextModal dangerouslySetInnerHTML={{ __html: message }} />
			</Container>
			<Container display="flex" $padding="20px 0 0 0" $justify="space-between">
				<ButtonCancel onClick={onRequestClose}>Cancelar</ButtonCancel>
				<ButtonConfirm onClick={onConfirm}>Confirmar</ButtonConfirm>
			</Container>
		</StyledModal>
	)
}

export default ConfirmationModal;