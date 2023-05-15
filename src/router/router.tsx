import { createBrowserRouter, Navigate } from "react-router-dom";
import { Welcome } from "../pages/Home";
import { Introduction } from "../components/Introduction";
import { Meal } from "../pages/Meal";

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
    path: "/testing",
    element: <Introduction/>
  },
  {
	path: "/*",
	element: <h1>404 error</h1>
  }
]);