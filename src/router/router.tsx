import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
// import { Meal } from "../pages/Meal";
import { Error } from "../pages/Error";

import { createBrowserRouter, Navigate } from "react-router-dom";
import { Introduction } from "../components/Introduction";
import { Home } from "../pages/Home";
import { GetStarted } from "../pages/GetStarted";
import { Favorites } from "../pages/Favorites";
import { Profile } from "../pages/Profile";
import { Orders } from "../pages/Orders";

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
		path: "/testing",
		element: <Introduction />,
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
		path: "/orders",
		element: <Orders/>
	},
	{
		path: "/*",
		element: <Error />,
	},
]);

