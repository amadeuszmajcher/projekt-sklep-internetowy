import "./styles/theme.css";
import "./styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { MainPage } from "./views/MainPage/MainPage";
import { mainPageLoader } from "./api/mainPageLoader";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { productListLoader } from "./api/productListLoader";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
      },
      {
        path: "/:type?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:type/:category/:subcategory?",
        element: <ProductsList />,
        loader: productListLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
