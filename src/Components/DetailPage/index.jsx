import React from 'react';
import styles from './styles.module.css';


const DetailPage = () => {
    return (


        <div className={styles.detailContainer}>
            <div className={styles.detailHeader}>
                SOCIAL CARD DETAIL

            </div>
            <div className={styles.detailContent}>
                <img className={styles.roundImage} src="Images/Phu.svg" alt="" />
                <div className={styles.title}>
                    <div className={styles.firstname}>Binance</div>
                    <div className={styles.birtday}>22/04/2021(day create)</div>
                </div>
            </div>
            <div className={styles.description}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more- or-less normal distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </div>
            <img className={styles.heuimage} src="Images/Hue.png" alt="" />
            <div className={styles.iconheartmess}>
                <div className={styles.hearticon}>
                    <div><img className={styles.heart} src="Images/Heart-solid.svg" alt="" /></div>
                    <div>2</div>
                </div>
                <div className={styles.messageicon}>
                    <div><img className={styles.message} src="Images/Message-solid.svg" alt="" /></div>
                    <div>4</div>
                </div>

            </div>
            <hr />
            <div className={styles.detailpage}>
                <div className={styles.thefirst}>
                    <div className={styles.day}>22/04/2021 (day create)</div>
                    <div className={styles.scripts}>It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more- or-less
                        normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English.</div>
                </div>


                <div className={styles.thesecond}>
                    <div className={styles.day}>22/04/2021 (day create)</div>
                    <div className={styles.scripts}>It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more- or-less
                        normal distribution of letters, as opposed to using 'Content here,
                        content here', making it look like readable English.</div>
                </div>

            </div>
            <hr />
            <div className={styles.titlecomment}>
                Post a new coment
            </div>

            <input className={styles.commentinput} type="text" placeholder='dhjfjshfdfd'/>
            <div className={styles.detailFooter}>
                {/* Nội dung phần footer */}
            </div>
        </div>

    );
}

export default DetailPage;