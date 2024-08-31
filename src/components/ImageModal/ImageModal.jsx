import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");
Modal.defaultStyles.overlay.backgroundColor = "rgb(32 32 32 / 75%)";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function ImageModal ({ modalIsOpen, closeModal, imgUrl })  {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}  
      shouldCloseOnEsc={true}   
    >
      <div className={css.modalContent}>
      <img src={imgUrl} className={css.fullImage} alt="" />
      </div>
    </Modal>
  );
};

