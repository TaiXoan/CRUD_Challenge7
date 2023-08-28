import React from 'react';
import styles from './styles.module.css';

const TrashModal = ({ closeModal, deleteContent }) => {
  const handleDelete = () => {
    // Gọi hàm deleteContent để xóa nội dung
    deleteContent();
    closeModal();
  };

  return (
    <div className={styles.trash}>
      <div className={styles.trashtitle}>
        <div className={styles.trashsubtitle}>
          Your about to delete an item
        </div>
        <div className={styles.trash}>
          <img src="Images/Trash.svg" alt="" />
        </div>
        <div className={styles.discription}>
          This will delete your item from the list
          <div className={styles.question}>Are you sure?</div>
        </div>
        <hr />
        <div className={styles.btn}>
          <button className={styles.deletebtn} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.cancelbtn} onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrashModal;