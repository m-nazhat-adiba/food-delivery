import Homepage from "../pages/Homepage";
import LoginPage from "../pages/LoginRegister";
import Menus from "../pages/Menus";
import ProductPage from "../pages/ProductDetails";
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
  {
    path: "/product/:userId",
    element: (
      <ProtectedRoute>
        <ProductPage />
      </ProtectedRoute>
    ),
  },
];
