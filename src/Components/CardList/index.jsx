import React, { useState } from "react";
import styles from './styles.module.css';
import Header from '../Header/Header';
import Modal from "react-modal";
import AddCardModal from '../AddCardModal';
import TrashModal from '../TrashModal';
import { getData, getLocalData } from "../Data";
import { format } from 'date-fns';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
    border: "none",
    boxShadow: "none",
    background: "none",
  },
};

const CardList = () => {
  const data = getData();
  const dataLocal = getLocalData();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [formData, setFormData] = useState({ description: '', img: '' });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openDeleteModal = () => {
    setModalDeleteIsOpen(true);
  };

  const closeDeleteModal = () => {
    setModalDeleteIsOpen(false);
  };

  const handleDeleteContent = async (index) => {
    const newDataLocal = [...dataLocal];
    newDataLocal.splice(index, 1);

    localStorage.setItem("cardData", JSON.stringify(newDataLocal));
    setDeleteIndex(newDataLocal);
    closeDeleteModal();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (formData.description && formData.img) {
      const currentData = getLocalData() || [];
      const newData = [...currentData, formData];

      try {
        localStorage.setItem('cardData', JSON.stringify(newData));
        closeModal();
      } catch (error) {
        console.log('Error saving data to local storage:', error);
      }
    } else {
      console.log('Vui lòng nhập đầy đủ thông tin');
    }
  };

  return (
    <>
      <Header />

      <div className={styles.formcard}>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Example Modal'
        >
          <AddCardModal
            closeModal={closeModal}
            handleChange={handleChange}
            handleSave={handleSave}
          />
        </Modal>

        {data.map((item, index) => (
          <div className={styles['card-container']} key={index}>
            <div className={styles['card-header']}>
              <div className={styles['profile-image']}>
                <img
                  src={item.profile}
                  alt={item.name}
                />
              </div>
              <div className={styles['header-content']}>
                <a href="/DetailPage">
                  <div className={styles['name-date-container']}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.date}>
                      {format(new Date(), "dd/MM/yyyy")}
                    </div>
                  </div>
                </a>
                <div className={styles['icon-wrapper']}>
                  <div className={styles.editicon}>
                    <img
                      onClick={openModal}
                      src='Images/EditIcon.svg'
                      alt='Edit'
                    />
                  </div>
                  <div className={styles.DeleteIcon}>
                    <img
                      onClick={openDeleteModal}
                      src='Images/DeleteIcon.svg'
                      alt='Delete'
                    />
                  </div>
                </div>
              </div>
            </div>
            <a href="/DetailPage">
              <div
                className={`${styles.description} ${
                  index === 2 ? styles.DescriptionMio : ""
                }`}
              >
                {item.description}
              </div>
              <div className={styles.img}>
                <img
                  src={item.img}
                  alt='Image'
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardList;