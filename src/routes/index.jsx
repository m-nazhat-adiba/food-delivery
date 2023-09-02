import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginRegister";
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
];
