import { createBrowserRouter, Navigate } from "react-router-dom";
import { Welcome } from "../pages/Home";
import { Introduction } from "../components/Introduction";
import { Meal } from "../pages/Meal";
import { Error } from "../pages/Error";
import { Menu } from "../pages/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/welcome"} />,
  },
  {
    path: "/welcome",
    element : <Welcome/>
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
    path: "/testing",
    element: <Introduction/>
  },
  {
	path: "/*",
	element: <Error/>
  }
]);