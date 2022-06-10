import styles from "./styles.module.css";
import { PageTitle } from "../../components/PageTitle";
import { FaFilter } from "react-icons/fa";
import Graphic from "../../components/Graphics/Graphic";
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
               <Graphic type="bar" title="Barras" height={310} />
            </BoxGraphic>
            {/* <div className={styles.boxGraphic}>
               <Graphic type="bar" title="Barras" height={330} />
            </div> */}

            <div className={styles.boxGraphic}>
               <Graphic type="scatter" title="Scatter" height={310} />
            </div>
         </div>
      </section>
   );
};
