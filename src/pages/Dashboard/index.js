import { PageTitle } from "../../components/PageTitle";
import { FaFilter } from "react-icons/fa";
import styles from "./styles.module.css";
import { BoxGraphic } from "../../components/BoxGraphic";

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
            <button className={styles.buttonFilter}>
               <FaFilter /> Filtrar
            </button>
         </div>

         <div className={styles.graphics}>
            <BoxGraphic>***</BoxGraphic>
            <BoxGraphic>***</BoxGraphic>
         </div>
      </section>
   );
};
