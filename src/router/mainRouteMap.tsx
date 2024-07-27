import { createHashRouter } from "react-router-dom";
import NotFoundPage from "../core/404";
import Login from "../layouts/login";
import PrivateLayout from "../layouts/PrivateLayout";
import CorePage from "../core";
import CoreRoutes from "../core/CoreRoutes";
import Mohollah from "../core/mohollah";


const router = createHashRouter(
  [
    {
      path:"/login",
      element:<Login/>
    },
    {
    path:"",
    element:<Mohollah/>

    },
    {
      path:"/core",
      element:<PrivateLayout/>,
      children:[
        {
          path:"",
          children:CoreRoutes
        }
      ]
    },
    {
      path:"*",
      element:<NotFoundPage/>
    }
  ]
)

export default router;