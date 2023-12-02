import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./addComment.module.css";

interface Props {
  submitHandler: (email: string, comment: string) => void;
}

const AddComment: FunctionComponent<Props> = ({ submitHandler }) => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() //inace ide reload
    setComment("")
    setEmail("")
    submitHandler(email, comment);
  };

  useEffect(()=>{
  }, [])

  useEffect(()=>{
  }, [email])

  return (
    <div className={styles.addCommentContainer}>
      <h3 className={styles.addCommentTitle}>Dodaj svoj komentar!</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="email">E-mail</label>
        <input id="email" type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e?.target?.value)}></input>
        <label htmlFor="comment">Vaš komentar</label>
        <textarea id="comment" placeholder="Vaš komentar..." value={comment} onChange={(e) => setComment(e?.target.value)}></textarea>
        <button type="submit" className={styles.addCommentButton}>
          Pošalji komentar
        </button>
      </form>
    </div>
  );
};

export default AddComment;
