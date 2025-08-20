import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./Components/Cart.jsx";
import Main from "./Components/Main.jsx";
import ErrorElement from "./Components/ErrorElement.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductDetail from "./Components/ProductDetail";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "/",
        element: <Main />,
      },
      {
  path: "product/:id",
  element: <ProductDetail />,
}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  </StrictMode>
);
