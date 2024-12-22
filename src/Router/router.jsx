import {
  createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
]);

export default router;