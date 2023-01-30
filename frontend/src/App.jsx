import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { ListUsers } from "./pages/ListUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app",
    element: <ListUsers />
  }
]);

export function App() {
  return <RouterProvider router={router} />
}