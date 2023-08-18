import React, { useState } from "react";
import axios from 'axios';

import styles from './styles.module.css';

const AddCardModal = ({ closeModal }) => {
    const [avatarFile, setAvatarFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleAvatarChange = (e) => {
        setAvatarFile(e.target.files[0]);
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const CLOUD_NAME = "dfswkp2bn";
        const PRESET_NAME = "ArtGallery";
        const FOLDER_NAME = "ArtGallery";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData();
        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);

        if (avatarFile) {
            formData.append("file", avatarFile);
        }

        if (imageFile) {
            formData.append("file", imageFile);
        }

        const response = await axios.post(api, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        });

        urls.push(response.data.secure_url);
        console.log(urls);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.modal}>
                <div className={styles.addcard}>
                    <div className={styles.cardtitle}>Add New Card</div>
                    <div className={styles.form}>
                        <div className={styles.fileupload}>
                            <div className={styles.avatar}>
                                <div>Avatar</div>
                                <div className={styles.star}>*</div>
                            </div>
                            <div className={styles.img}>
                                <input type="file" className={styles.uploadsolid} onChange={handleAvatarChange} />
                            </div>
                            <div className={styles.uploadfile}>Upload Image</div>
                        </div>

                        <div className={styles.name}>
                            <div className={styles.formfield}>
                                <div>Name</div>
                                <div className={styles.star}>*</div>
                            </div>
                            <input type="text" className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className={styles.descriptionimage}>
                            <div className={styles.formfield}>
                                <div>Description</div>
                                <div className={styles.star}>*</div>
                            </div>
                            <input type="text" className={styles.input} value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>

                        <div className={styles.fileupload}>
                            <div className={styles.avatar}>Image</div>
                            <div className={styles.img}>
                                <input type="file" className={styles.uploadsolid} onChange={handleImageChange} />
                            </div>
                            <div className={styles.uploadfile}>Upload Image</div>
                            <div className={styles.line}></div>
                        </div>
                        <hr />
                        <div className={styles.btn}>
                            <button type="submit" className={styles.deletebtn}>Save</button>
                            <button className={styles.cancelbtn} onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default AddCardModal;