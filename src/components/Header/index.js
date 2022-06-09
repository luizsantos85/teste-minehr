import styles from "./styles.module.css";

export const Header = () => {
   return (
      <header className={`${styles.header} container`}>
         <div>Logomarca</div>
         <nav>Menu</nav>
      </header>
   );
};
