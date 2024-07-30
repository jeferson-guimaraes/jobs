import { ButtonConfirm, ModalTitle, StyledModal, TextModal } from "../styles"
import { Container } from "../../../styles/global"
import { IoCheckmarkCircle, IoAlertCircle } from "react-icons/io5"
import { useModal } from "../../../contexts/ModalContext"

StyledModal.setAppElement('#root')

const AlertModal = () => {
	const { isModalOpen, closeModal, message, type } = useModal();

	return (
		<StyledModal
			isOpen={isModalOpen}
			onRequestClose={closeModal}
			contentLabel="Alert Modal"
			className="Modal"
			overlayClassName="Overlay"
		>
			<ModalTitle>
				{type == 'success' &&
					<IoCheckmarkCircle size={70} className="modalIcon" />
				}
				{type == 'error' &&
					<IoAlertCircle size={70} className="modalIcon" />
				}
			</ModalTitle>
			<Container display="flex" $justify="center" $margin="30px 0">
				<TextModal dangerouslySetInnerHTML={{ __html: message }} />
			</Container>
			<Container display="flex" $padding="20px 0 0 0" $justify="center">
				<ButtonConfirm onClick={closeModal}>OK</ButtonConfirm>
			</Container>
		</StyledModal>
	);
}

export default AlertModal;