import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
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

