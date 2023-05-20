import { createBrowserRouter, Navigate } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { Introduction } from "../components/Introduction";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

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
		path: "/login",
		element: <Login />,
	},
	{
		path: "/*",
		element: <h1>404 error</h1>,
	},
	{
		path: "/register",
		element: <Register />,
	},
]);
