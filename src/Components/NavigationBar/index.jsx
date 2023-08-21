import React, { Component } from 'react';
import styles from './styles.module.css';
import Modal from "react-modal";
import AddCardModal from '../AddCardModal';
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "0px",
    background: "none",
  },
};
const Naba = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className={styles.navigation}>
      <div className={styles.btn} onClick={openModal}>

        <button>Add New</button>

      </div>
      <div className={styles['search-bar']}>
        <input type="text"
          name=""
          className={styles.research}
          placeholder="Search name" />

        <div className={styles['icon-search']}>
          <img src="Images/SearchIcon.svg" alt="" />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <AddCardModal closeModal={closeModal}></AddCardModal>
      </Modal>
    </div>
  );
}
export default Naba;