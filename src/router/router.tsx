import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Meal } from "../pages/Meal";
import { Error } from "../pages/Error";
import { Menu } from "../pages/Menu";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { Introduction } from "../components/Introduction";
import { Home } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />,
  },
  {
    path: "/home",
    element : <Home/>
  },
  {
    path: "/meal/:id",
    element: <Meal/>
  },
  {
    path: "/menu",
    element: <Menu/>
  },
  {
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
  {
    path: "/testing",
    element: <Introduction/>
  },
  {
	path: "/*",
	element: <Error/>
  }
]);

