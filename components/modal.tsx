'use client'
import { useWindowSize } from '@/lib/utilities';
import { ReactNode } from 'react';
/** Core */
/** Components */
import Modal from 'react-modal';
/** Set modal to the root element */
Modal.setAppElement('#react-modal');
/** Modal default style */
const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0,0,0,.5)',
    borderRadius: 0,
    padding: 0,
    border: 'none',
    width: '90%'
  },
  overlay: {
    backgroundColor: '#00000',
  },
};
/** Types */
export type PoskyModalProps = {
  isOpen: boolean;
  children: ReactNode,
  onModalClose?: () => void;
}

export default function PoskyModal(props: PoskyModalProps) {
  const { isOpen, children, onModalClose } = props;

  const windowSize = useWindowSize();

  if (windowSize.width > 1024 ) {
    modalStyle.content.width = '500px';
  } else {
    modalStyle.content.width = '90%';
  }

  const afterOpenModal = (modal: any) => {};

  return <Modal
    isOpen={isOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={onModalClose}
    style={modalStyle}
    contentLabel="Navighiamo"
  >
    {children}
  </Modal>
}