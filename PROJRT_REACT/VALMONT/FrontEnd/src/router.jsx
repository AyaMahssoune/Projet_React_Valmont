import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { getProduit } from "./apis";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import AddProduit from "./pages/Admin/components/AddProduit/AddProduit";
import EditProduit from "./pages/Admin/components/EditProduit/EditProduit";
import NotFound from "./pages/NotFound/NotFound";

// Crée le routeur de l'app en utilisant createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/", //Chemin de l'URL
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "admin",
        element: <Admin />,
        children: [
          {
            path: "add",
            element: <AddProduit />,
          },
          {
            path: "edit/:produitId",
            element: <EditProduit />,
            loader: async ({ params: { produitId } }) => getProduit(produitId),
          },
        ],
      },
    ],
  },
]);

export default router;
