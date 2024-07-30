export interface ModalProps {
	isModalOpen: boolean
	openModal: (message: string, type: 'success' | 'error', navigateTo?: string) => void
	closeModal: () => void
	message: string
	type?: 'success' | 'error'
}

export interface ConfirmationModalProps{
	isOpen: boolean
	message: string
	onRequestClose: () => void
	onConfirm: () => void
}