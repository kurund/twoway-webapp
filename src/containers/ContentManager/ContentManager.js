import React, { Component } from "react";
import { connect } from "react-redux";

import Content from "../../components/Content/Content";
import styles from "./ContentManager.module.css";
import ContentCreate from "./ContentCreate/ContentCreate";

class ContentManager extends Component {
  render() {
    let contentDisplay = "No content to display";
    if (this.props.contents.length > 0) {
      contentDisplay = this.props.contents.map((content) => {
        return (
          <div key={content.id}>
            <Content title={content.title} body={content.body} />
            <br />
          </div>
        );
      });
    }

    return (
      <div>
        <div className={styles.ContentManager}>
          <div className={styles.Card}>{contentDisplay}</div>
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
