'use client'
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
  },
};
/** Types */
export type PoskyModalProps = {
  isOpen: boolean;
  onModalClose?: () => void;
}

export default function PoskyModal(props: PoskyModalProps) {
  const { isOpen, onModalClose } = props;

  const afterOpenModal = (modal: any) => console.log('AFTER OPEN', modal);

  return <Modal
    isOpen={isOpen}
    onAfterOpen={afterOpenModal}
    onRequestClose={onModalClose}
    style={modalStyle}
    contentLabel="Example Modal"
  >
    <h2>Hello</h2>
    <button onClick={onModalClose}>close</button>
    <div>I am a modal</div>
    <form>
      <input />
      <button>tab navigation</button>
      <button>stays</button>
      <button>inside</button>
      <button>the modal</button>
    </form>
  </Modal>
}