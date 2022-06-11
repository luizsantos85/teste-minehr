import {Link} from 'react-router-dom'
import styles from "./styles.module.css";

export const Header = () => {
   return (
      <header className={`${styles.header} container`}>
         <div>Logomarca</div>
         <nav>
            <Link to='/'>Dashboard</Link>
         </nav>
      </header>
   );
};
