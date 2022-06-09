import { PageTitle } from "../../components/PageTitle";
import styles from "./styles.module.css";

export const Dashborad = () => {
   return (
      <section className={styles.contentDash}>
         <div className={styles.headerDash}>
            <div>
               <PageTitle
                  title="Dashboard"
                  subtitle="Desafio Técnico Frontend"
               />
            </div>

            <button>Filtrar</button>
         </div>
      </section>
   );
};
