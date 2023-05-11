import { createBrowserRouter } from "react-router-dom";
import { Introduction } from "../components/Introduction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Introduction />,
  },
  {
	path: "/*",
	element: <h1>404 error</h1>
  }
]);