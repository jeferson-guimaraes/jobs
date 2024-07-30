import { createContext, useContext, useState, ReactNode, useCallback } from "react"
import { ModalProps } from "../types/modal"
import { useNavigate } from "react-router-dom";

const ModalContext = createContext<ModalProps | undefined>(undefined)

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
	const [type, setType] = useState<'success' | 'error' | undefined>()
  const [navigateTo, setNavigateTo] = useState<string | undefined>()
  const navigate = useNavigate()

  const openModal = useCallback((msg: string, type: 'success' | 'error', route?: string) => {
    setType(type)
		setMessage(msg);
    setIsModalOpen(true);
    setNavigateTo(route)
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setMessage('')
    if (navigateTo){
      navigate(navigateTo)
      setNavigateTo(undefined)
    }
  }, [navigate, navigateTo]);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, message, type }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};


