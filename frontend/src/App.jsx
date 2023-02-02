import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./pages/Login";
import { ListUsers } from "./pages/ListUsers";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode"

function PrivateRoute({ children }) {
  const token = Cookies.get('token')
  if (token) {
    const payload = jwtDecode(token)
    if (Date.now() < payload.exp * 1000) {
      return children
    }
    Cookies.remove('token')
  }
  return <Navigate to='/' />
}

function ProtectedRoute({ children }) {
  const token = Cookies.get('token')
  if (token) {
    return <Navigate to='/app' />
  }
  return children
}

const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>,
  },
  {
    path: "/app",
    element: 
      <PrivateRoute>
        <ListUsers />
      </PrivateRoute>
  }
]);

export function App() {
  return <RouterProvider router={router} />
}