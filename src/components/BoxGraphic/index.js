import { FaInfoCircle } from "react-icons/fa";
import styles from "./styles.module.css";

export const BoxGraphic = (props) => {
   return (
      <div className={styles.boxGraphic}>
         <div className={styles.boxHeader}>
            <p>
               {props.title} <FaInfoCircle />
            </p>
         </div>

         <div className={styles.boxContent}>{props.children}</div>
      </div>
   );
};
