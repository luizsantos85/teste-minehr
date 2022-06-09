import styles from "./styles.module.css";

export const PageTitle = (props) => {
   return (
      <div className={styles.pageTitle}>
         <h1>{props.title}</h1>
         <p>{props.subtitle}</p>
      </div>
   );
};
