import styles from "./styles.module.css";

export const Dashborad = () => {
   return (
      <section className={`${styles.contentDash} container`}>
         <div className={styles.headerDash}>
            <div>
               <h1>Dashboard</h1>
               <p>Desafio Técnico Frontend</p>
            </div>

            <button>Filtrar</button>
         </div>
      </section>
   );
};
