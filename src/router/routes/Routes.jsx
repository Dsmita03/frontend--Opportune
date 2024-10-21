import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login.jsx";
import SingUp from "../../pages/SignUp/SingUp.jsx";
import Error from "../../pages/Error/Error";
import CreatePost from "../../pages/Home/CreatePost/CreatePost";
import Careers from "../../pages/Home/ViewPost/Careers.jsx";
import PrivateRoute from "../private-routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { 
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/create-post",
        element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-post",
        element: (
          <PrivateRoute>
            <Careers />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
