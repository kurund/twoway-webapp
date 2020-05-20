import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styles from "./NavigationItems.module.css";

const navigationItems = (props) => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/">Home</NavigationItem>
      <NavigationItem link="/content">Content</NavigationItem>
    </ul>
  );
};

export default navigationItems;
