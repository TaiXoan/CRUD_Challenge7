import React, { useState } from 'react';
import styles from './styles.module.css';

const DetailPage = () => {
  const [heartCount, setHeartCount] = useState(0);
  const [comments, setComments] = useState([]);

  const increaseHeartCount = () => {
    setHeartCount(heartCount + 1);
  };

  const handlePostComment = (event) => {
    event.preventDefault();
    const commentInput = event.target.comment.value;
    if (commentInput) {
      const newComment = {
        date: new Date().toLocaleDateString(),
        content: commentInput,
      };
      setComments([...comments, newComment]);
      event.target.comment.value = '';
    }
  };

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
        <img className={styles.imgHue} src="./images/Hue.png" alt="" />
      </div>
      <div className={styles.iconheartmess}>
        <div className={styles.heart} onClick={increaseHeartCount}>
          <img src="./images/Heart-solid.svg" alt="" />
          <div className={styles.count}>{heartCount}</div>
        </div>
        <div className={styles.meseges}>
          <img src="./images/Message-Solid.svg" alt="" />
          <div className={styles.count}>2</div>
        </div>
      </div>
      <div className={styles.line}></div>
      {comments.map((comment, index) => (
        <div className={styles.comments} key={index}>
          <div className={styles.day}>{comment.date}</div>
          <div className={styles.commentcontent}>{comment.content}</div>
        </div>
      ))}
      <div className={styles.line}></div>
      <div className={styles.formcomment}>
        <div className={styles.posttext}>Post a new comment</div>
        <form className={styles.formcontent} onSubmit={handlePostComment}>
          <input
            className={styles.commentinput}
            type="textarea"
            name="comment"
            placeholder="Add comment"
          />
          <div>
            <button type="submit">Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailPage;