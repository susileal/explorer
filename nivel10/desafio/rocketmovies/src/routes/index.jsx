import { BrowserRouter } from "react-router-dom";

// importando as rotas

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  return (
    <BrowserRouter>
      <AuthRoutes/>
    </BrowserRouter>
  )
}


