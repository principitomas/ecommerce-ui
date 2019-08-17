import React from 'react'
import { Switch, Route} from "react-router-dom";
import Homepage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import ProductOverviewPage from "./pages/productoverviewpage";

const Router = () => (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/cart' component={CartPage} />
        <Route exact path='/overview/:id' component={ProductOverviewPage} />
    </Switch>
)

export default Router;