import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import { getData, getLocalData } from "../Data";
import Header from '../Header/Header';
import Modal from "react-modal";
import AddCardModal from '../AddCardModal';
import TrashModal from '../TrashModal';
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
  console.log(dataLocal);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [savedImage, setSavedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleUploadImage = (event) => {
    const file = event.target.files[0];

    // Kiểm tra xem file có tồn tại không
    if (file) {
      const reader = new FileReader();

      // Đọc file và lấy đường dẫn hình ảnh
      reader.readAsDataURL(file);
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
    }
  };
  function openModal() {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  };
  function openDeleteModal(index) {
    setDeleteIndex(index);
    setModalDeleteIsOpen(true);
  }

  function closeDeleteModal() {
    setModalDeleteIsOpen(false);
  };

  const [deleteIndex, setDeleteIndex] = React.useState(null);
  const handleDeleteContent = async () => {
    // Make a copy of the dataLocal array so that it doesn't affect the state directly
    const newDataLocal = [...dataLocal];
    newDataLocal.splice(deleteIndex, 1);

    // Update Local Storage with the updated newDataLocal array
    localStorage.setItem("cardData", JSON.stringify(newDataLocal));

    // Update dataLocal state to cause page re-rendering
    setModalDeleteIsOpen(false);
  };
  return (
    <>
      <Header />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal">
        <AddCardModal closeModal={closeModal}></AddCardModal>
      </Modal>

      <Modal
        isOpen={modalDeleteIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel="Delete Modal">
        <TrashModal
          closeModal={closeDeleteModal}
          deleteContent={handleDeleteContent}
          deleteIndex={deleteIndex}
        />
      </Modal>
      {/* <div className={styles.formcard}>
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
                className={`${styles.description} ${index === 2 ? styles.DescriptionMio : ""
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
      </div> */}
      <div className={styles.formcard}>
        {dataLocal.map((item, index) => (
          <div className={styles['card-container']} key={index}>
            <div className={styles['card-header']}>
              <div className={styles['profile-image']}>
                <img
                  src={imagePreview || item.img}
                  alt="Image"
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
                      onClick={() => openDeleteModal(index)}
                      src='Images/DeleteIcon.svg'
                      alt='Delete'
                    />
                  </div>
                </div>
              </div>
            </div>
            <a href="/DetailPage">
              <div
                className={`${styles.description} ${index === 2 ? styles.DescriptionMio : ""
                  }`}
              >
                {item.description}
              </div>
              <div className={styles.img}>
                <img
                  src={uploadedImage || item.img}
                  alt="Image"
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
