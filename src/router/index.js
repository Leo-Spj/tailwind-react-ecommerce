import { createBrowserRouter } from "react-router-dom";

export const Router = createBrowserRouter([

    { path: "/", element: <App /> },

    { path: "item/:id",
    element: <ItemDetailContainer /> },

    { path: "category/:id",
    element: <ItemListContainer /> },

    { path: "cart",
    element: <Cart /> },


]);