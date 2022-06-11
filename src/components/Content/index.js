import { Routes, Route } from "react-router-dom";
import { Dashborad } from "../../pages/Dashboard";
import {NotFound} from '../../pages/Notfound'

export const Content = () => {
   return (
      <article>
         <Routes>
            <Route path="/" element={<Dashborad />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </article>
   );
};
