import { createBrowserRouter, Navigate } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { Introduction } from "../components/Introduction";
import { Register } from "../pages/Register";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to={"/welcome"} />,
	},
	{
		path: "/welcome",
		element: <Welcome />,
	},
	{
		path: "/testing",
		element: <Introduction />,
	},
	{
		path: "/*",
		element: <h1>404 error</h1>,
	},
	{
		path: "/register",
		element:<Register />,
	},
]);