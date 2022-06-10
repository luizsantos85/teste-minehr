import { Routes, Route } from "react-router-dom";
import { Dashborad } from "../../pages/Dashboard";

export const Content = () => {
   return (
      <article>
         <Routes>
            <Route path="/" element={<Dashborad />} />
            {/* <Route path="*" element={<Notfound />} /> */}
         </Routes>
      </article>
   );
};
