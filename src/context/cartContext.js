import React from "react";
import {CartProvider} from "./context/cartContext.js";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import Cart from "./components/CartWidget.js";



function App() {
    return (
        <CartProvider>
            <BrowserRouter>

                <NavBar />

                <Switch>

                    <Route exact path="/">
                        <ItemListContainer greeting="Bienvenido a la tienda" />
                    </Route>

                    <Route exact path="/category/:id">
                        <ItemListContainer greeting="Bienvenido a la tienda" />
                    </Route>

                    <Route exact path="/item/:id">
                        <ItemDetailContainer />
                    </Route>

                    <Route exact path="/cart">
                        <Cart />
                    </Route>

                </Switch>

            </BrowserRouter>
        </CartProvider>
    );
}

export default App;

