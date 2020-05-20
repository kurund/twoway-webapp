import React from "react";

import styles from "./Content.module.css";

const content = (props) => {
  return (
    <div className={styles.Content}>
      <strong>{props.title}</strong>
      <p>{props.body}</p>
    </div>
  );
};

export default content;
