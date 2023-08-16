import React from "react";
import styles from "./styles.module.css";

const DetailPage = () => {
    return (
        <div className={styles.detailContainer}>
            <div className={styles.title}>SOCIAL CARD DETAIL</div>
            <div className={styles.userinfo}>
                <img className={styles.roundimage} src="Images/Phu.svg" alt="" />
                <div className={styles.usertext}>
                    <div className={styles.firstname}>Binance</div>
                    <div className={styles.birthday}>22/04/2021 (day create)</div>
                </div>
            </div>
            <div className={styles.generaldescription}>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more- or-less normal distribution of
                letters, as opposed to using 'Content here, content here', making it
                look like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
            </div>
            <div className={styles.image}>
                <img src="./images/Hue.png" alt="" />
            </div>
            <div className={styles.iconheartmess}>
                <div className={styles.heart}>
                    <img src="./images/Heart-solid.svg" alt="" />
                    <div className={styles.count}>2</div>
                </div>
                <div className={styles.meseges}>
                    <img src="./images/Message-Solid.svg" alt="" />
                    <div className={styles.count}>2</div>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.comments}>
                <div className={styles.day}>22/04/2021 (day create)</div>
                <div className={styles.commentcontent}>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more- or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making
                    it look like readable English.
                </div>
            </div>
            <div className={styles.comments}>
                <div className={styles.day}>22/04/2021 (day create)</div>
                <div className={styles.commentcontent}>
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more- or-less normal distribution
                    of letters, as opposed to using 'Content here, content here', making
                    it look like readable English.
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.formcomment}>
                <div className={styles.posttext}>Post a new comment</div>
                <div className={styles.formcontent}>
                    <input
                        className={styles.commentinput}
                        type="textarea"
                        placeholder="Add comment"
                    />
                    <div>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DetailPage;