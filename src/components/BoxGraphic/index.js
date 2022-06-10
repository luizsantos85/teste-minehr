import React from "react";
import styles from "./styles.module.css";

export const BoxGraphic = (props) => {
   return (
      <div className={styles.boxGraphic}>
         <div className={styles.boxHeader}>
            <p>title icon</p>
            <button>...</button>
         </div>

         <div className={styles.boxContent}>{props.children}</div>
      </div>
   );
};
