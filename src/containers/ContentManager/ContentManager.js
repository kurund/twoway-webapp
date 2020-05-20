import React, { Component } from "react";

import Content from "../../components/Content/Content";
import styles from "./ContentManager.module.css";
import ContentCreate from "./ContentCreate/ContentCreate";

class ContentManager extends Component {
  state = {
    contents: [
      {
        title: "content 1",
        body: "This is test body 1",
      },
      {
        title: "content 2",
        body: "This is test body 2",
      },
      {
        title: "content 3",
        body: "This is test body 3",
      },
    ],
  };

  render() {
    const contentDisplay = this.state.contents.map((content) => {
      return (
        <div>
          <Content title={content.title} body={content.body} />
          <br />
        </div>
      );
    });
    return (
      <div>
        <div className={styles.ContentManager}>
          <p className={styles.Card}>{contentDisplay}</p>
        </div>
        <div className={styles.ContentForm}>
          <ContentCreate />
        </div>
      </div>
    );
  }
}

export default ContentManager;
