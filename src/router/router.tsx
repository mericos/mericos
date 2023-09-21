import { Register } from "../pages/Register";
import { Login } from "../pages/Login";

import { Error } from "../pages/Error";

import { createBrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { GetStarted } from "../pages/GetStarted";
import { Favorites } from "../pages/Favorites";
import { Profile } from "../pages/Profile";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to={"/home"} />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	// {
	// 	path: "/meal/:id",
	// 	element: <Meal />,
	// },

	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/register",
		element: <Register />,
	},
	{
		path: "/getting_started",
		element: <GetStarted />,
	},
	{
		path: "/favorites",
		element: <Favorites />,
	},
	{
		path: "/profile",
		element: <Profile />,
	},
	{
		path: "/*",
		element: <Error />,
	},
]);
