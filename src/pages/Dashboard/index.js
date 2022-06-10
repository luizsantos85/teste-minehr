import styles from "./styles.module.css";
import { PageTitle } from "../../components/PageTitle";
import { FaFilter } from "react-icons/fa";
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
            <BoxGraphic title="Barras">
               
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
               in provident laborum dolorum. Quis odit doloremque dolorum ipsa
               minus in enim nostrum exercitationem non, reiciendis quisquam
               fugiat fugit libero. Vitae!
            </BoxGraphic>

            

            <BoxGraphic title="Scatter">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
               in provident laborum dolorum. Quis odit doloremque dolorum ipsa
               minus in enim nostrum exercitationem non, reiciendis quisquam
               fugiat fugit libero. Vitae!
            </BoxGraphic>
         </div>
      </section>
   );
};
