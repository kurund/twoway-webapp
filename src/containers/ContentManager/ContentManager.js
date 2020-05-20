import React, { Component } from "react";
import { connect } from "react-redux";

import Content from "../../components/Content/Content";
import styles from "./ContentManager.module.css";
import ContentCreate from "./ContentCreate/ContentCreate";

class ContentManager extends Component {
  render() {
    const contentDisplay = this.props.contents.map((content) => {
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

const mapStateToProps = (state) => {
  return {
    contents: state.contents,
  };
};

export default connect(mapStateToProps)(ContentManager);
