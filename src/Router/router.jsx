import {
  createBrowserRouter,
} from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Service from "../Pages/Service";
import Addservice from "../Pages/Addservice";
import Myreviews from "../Pages/Myreviews";
import Privateroute from "./Privateroute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/addservice",
        element: <Privateroute><Addservice></Addservice></Privateroute>,
      },
      {
        path: "/myreview",
        element: <Privateroute><Myreviews></Myreviews></Privateroute>,
      }
    ]
  },
]);

export default router;