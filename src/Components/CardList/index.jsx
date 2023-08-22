import React from "react";
import styles from './styles.module.css';
import Header from '../Header/Header';
import Modal from "react-modal";
import AddCardModal from '../AddCardModal';
import TrashModal from '../TrashModal';

const CardList = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalDeleteIsOpen, setModalDeleteIsOpen] = React.useState(false); // Add state for delete modal

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openDeleteModal() {
        setModalDeleteIsOpen(true);
    }

    function closeDeleteModal() {
        setModalDeleteIsOpen(false);
    }
    const customStyles = {
        content: {
            padding: '0',
            background: 'none',
            border: 'none'
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
                    <AddCardModal closeModal={closeModal}></AddCardModal>
                </Modal>

                <Modal
                    isOpen={modalDeleteIsOpen}
                    onRequestClose={closeDeleteModal}
                    style={customStyles}
                    contentLabel='Delete Modal'
                >
                    <TrashModal closeModal={closeDeleteModal}></TrashModal>
                </Modal>


                <div className={styles['card-container']}>
                    <div className={styles['card-header']}>
                        <div className={styles['profile-image']}>
                            <img src="Images/Phu.svg" alt="" />
                        </div>
                        <div className={styles['header-content']}>
                            <a href="/DetailPage">
                                <div className={styles['name-date-container']}>
                                    <div className={styles.name}>Phu </div>
                                    <div className={styles.date}>14/08/2023</div>
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
                        <div className={styles.description}>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </div>
                        <img className={styles.cat} src="Images/Cat.svg" alt="" />
                    </a>
                </div>

                <div className={styles['card-container']}>
                    <div className={styles['card-header']}>
                        <div className={styles['profile-image']}>
                            <img src="Images/Music.svg" alt="" />
                        </div>
                        <div
                            className={styles['card-container']}
                            onClick={() => {
                                window.location.href = "/DetailPage";
                            }}
                        ></div>
                        <div className={styles['header-content']}>
                            <div className={styles['name-date-container']}>
                                <a href="/DetailPage">
                                    <div className={styles.name}>Vanre</div>
                                    <div className={styles.date}>14/08/2023</div>
                                </a>
                            </div>



                            <div className={styles['icon-wrapper']}>
                                <div className={styles.EditIcon}>
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
                        <div className={styles.description}>
                            Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông tin:
                            Avatar, Name, Description, Image
                        </div>


                        <img className={styles.baby} src="Images/Baby.svg" alt="" />
                    </a>

                </div>
                <div className={styles['card-container']}>
                    <div className={styles['card-header']}>
                        <div className={styles['profile-image']}>
                            <img src="Images/Micro.svg" alt="" />
                        </div>
                        <div className={styles['header-content']}>
                            <div className={styles['name-date-container']}>
                                <a href="/DetailPage">
                                    <div className={styles.name}>Mio</div>
                                    <div className={styles.date}>14/08/2023</div>
                                </a>
                            </div>
                            <div className={styles['icon-wrapper']}>
                                <div className={styles.EditIcon}>
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
                        <div className={styles.description}>
                            Next, you select one property. It doesn’t matter which one you choose, yet
                            it’s best to pick one that seems totally unrelated to your challenge.
                        </div>
                        <img className={styles.elephant} src="Images/Elephant.svg" alt="" />
                    </a>
                </div>
            </div>
        </>
    );
}


export default CardList;