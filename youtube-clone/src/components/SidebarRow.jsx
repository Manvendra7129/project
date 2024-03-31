import React from "react";
import styles from "./SidebarRow.module.css";

function SidebarRow({ selected, Icon, title }) {
  return (
    <section className={`${styles.SidebarRow} ${selected && styles.selected}`}>
      <Icon className={styles.SidebarRow__Icon} />
      <h2 className={styles.SidebarRow__title}>{title}</h2>
    </section>
  );
}

export default SidebarRow;
