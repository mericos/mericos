import { createBrowserRouter, Navigate } from "react-router-dom";
import { Introduction } from "../components/Introduction";
import { Welcome } from "../pages/Welcome";

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
	path: "/*",
	element: <h1>404 error</h1>
  }
]);