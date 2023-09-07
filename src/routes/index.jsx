import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginRegister";
import Menus from "../pages/Menus";
import ProtectedRoute from "./ProtectedRoute";

export const routes = [
  {
    path: "/authentication",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/menus",
    element: (
      <ProtectedRoute>
        <Menus />
      </ProtectedRoute>
    ),
  },
];
