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
import Servicedetails from "../components/Servicedetails";
import Myservices from "../Pages/Myservices";


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
      },
      {
        path: "/myservice",
        element: <Privateroute><Myservices></Myservices></Privateroute>,
      },
      {
        path: '/servicedetails/:id',
        element: <Servicedetails></Servicedetails>
      }
    ]
  },
]);

export default router;