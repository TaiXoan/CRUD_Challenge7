import React, { useState } from "react";
import axios from 'axios';
import styles from './styles.module.css';

const AddCardModal = ({ closeModal }) => {
  const [avatarFile, setAvatarFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) {
      setNameError(true);
    }
    if (!description) {
      setDescriptionError(true);
    }

    const CLOUD_NAME = "dfswkp2bn";
    const PRESET_NAME = "ArtGallery";
    const FOLDER_NAME = "ArtGallery";
    const urls = [];
    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);
  

    try {
        formData.append("file", imageFile);
      const response = await axios.post(api, formData, {

        headers: {
          "Content-Type": "multipart/form-data"
        },
      });

      // Xử lý response thành công
      console.log(response.data);
    } catch (error) {
      // Xử lý lỗi
      console.error(error);
    }
  };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.modal}>
                <div className={styles.addcard}>
                    <div className={styles.cardtitle}>Add New Card</div>
                    <div className={styles.form}>
                        <div className={styles.fileupload}>
                            <div className={`${styles.avatar} ${nameError ? styles.erroravatar : ''}`}>
                                <div>Avartar</div>
                                <div className={styles.star}>*</div>
                            </div>

                            <div className={styles['img']}>
                             <img className={styles.uploadsolid} src={ "Images/upload-solid.svg"} alt="" />
                            </div>
                            <div className={styles.uploadfile}>Upload Image</div>


                            <div className={styles.img}>
                                
                                <input type="file" className={styles.uploadsolid} onChange={handleImageChange} />
                            </div>


                        </div>

                        <div className={styles.name}>
                            <div className={`${styles.formfield} ${nameError ? styles.error : ''}`}>
                                <div>Name</div>
                                <div className={styles.star}>*</div>
                            </div>
<input
                                type="text"
                                className={`${styles.input} ${nameError ? styles.error : ''}`}
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (nameError) {
                                        setNameError(false); // Đặt lại trạng thái lỗi khi người dùng thay đổi giá trị
                                    }
                                }}
                            />
                        </div>

                        <div className={styles.descriptionimage}>
                            <div className={`${styles.formfield} ${descriptionError ? styles.error : ''}`}>
                                <div>Description</div>
                                <div className={styles.star}>*</div>
                            </div>

                            <input
                                type="text"
                                className={`${styles.input} ${descriptionError ? styles.error : ''}`}
                                value={description}
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                    if (descriptionError) {
                                        setDescriptionError(false); // Đặt lại trạng thái lỗi khi người dùng thay đổi giá trị
                                    }
                                }}
                            />

                        </div>

                        <div className={styles.fileupload}>
                            <div className={styles.avatar}>Image</div>

                            <div className={styles['image']}>
                                <img className={styles.uploadsolid} src="Images/upload-solid.svg" alt="" />
                            </div>

                            <div className={styles.uploadfile}>Upload Image</div>

                            <div className={styles.img}>
                                <input type="file" className={styles.uploadsolid} onChange={handleAvatarChange} />
                            </div>

                            <div className={styles.line}></div>
                        </div>
                        <hr />
                        <div className={styles.btn}>
                            <button type="submit" className={styles.savebtn} onClick={handleSubmit}>Save</button>
                            <button className={styles.cancelbtn} onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddCardModal;