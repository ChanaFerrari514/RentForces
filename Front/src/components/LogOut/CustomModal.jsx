import React, { useState } from "react";

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

const CustomModal = ({ buttonText, onConfirm, modalTitle, modalMessage }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleConfirm = () => {
    onConfirm(); // Appel de la fonction onConfirm passée en tant que prop
    toggleModal(); // Fermer le pop-up après confirmation
  };

  return (
    <>
      <MDBBtn onClick={toggleModal}>{buttonText}</MDBBtn>
      <MDBModal show={showModal} onHide={toggleModal}>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{modalTitle}</MDBModalTitle>
              <MDBBtn className="btn-close" color="none" onClick={toggleModal}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>{modalMessage}</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>
                Annuler
              </MDBBtn>
              <MDBBtn onClick={handleConfirm}>Confirmer</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
};

export default CustomModal;
