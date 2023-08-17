import React, { Component } from 'react';
import styles from './styles.module.css';

const AddCardModal = ({ closeModal }) => {

    return (

        <div className={styles.modal}>
            <div className={styles.addcard}>
                <div className={styles.cardtitle}>Add New Card</div>
                <div className={styles.form}>
                    <div className={styles.fileupload}>
                        <div className={styles.avatar}>
                            <div>Avatar</div>
                            <div className={styles.star}>*</div>
                        </div>
                        <div className={styles['img']}>
                            <img className={styles.uploadsolid} src="Images/upload-solid.svg" alt="" />
                        </div>

                        <div className={styles.uploadfile}>Upload Image</div>
                    </div>

                    <div className={styles.name}>
                        <div className={styles.formfield}>
                            <div>Name </div>
                            <div className={styles.star}>*</div>
                        </div>
                        <input type="text" className={styles.input} />
                    </div>


                    <div className={styles.descriptionimage}>
                        <div className={styles.formfield}>
                            <div>Description</div>
                            <div className={styles.star}>*</div>
                        </div>
                        <input type="text" className={styles.input} />
                    </div>

                    <div className={styles.fileupload}>
                        <div className={styles.avatar}>Image</div>
                        <div className={styles['img']}>
                            <img className={styles.uploadsolid} src="Images/upload-solid.svg" alt="" />
                        </div>

                        <div className={styles.uploadfile}>Upload Image</div>
                        <div className={styles.line}></div>

                    </div>
                    <hr />
                    <div className={styles.btn}>
                        <button className={styles.deletebtn}>Save</button>
                        <button className={styles.cancelbtn} onClick={closeModal}>Cancel</button>
                    </div>

                </div>

            </div>
        </div>



    );
}

export default AddCardModal;