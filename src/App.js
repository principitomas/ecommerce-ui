import React from 'react';
import {HashRouter, NavLink, Route, Switch} from "react-router-dom";

import Router from "./Router";
import Appbar from "./Appbar";
import AppDrawer from "./AppDrawer";
import Homepage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import CssBaseline from "@material-ui/core/CssBaseline";


const drawerWidth = 240;
const styles = theme => ({
    root: {
        flexGrow: 1,
        // height: 440,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        // padding: theme.spacing.unit * 1,
        minWidth: 0, // So the Typography noWrap works
    },
    toolbar: theme.mixins.toolbar,
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

function App() {
    return (
        <HashRouter>
            <CssBaseline/>
            <Appbar/>
            <AppDrawer/>
            <main className={'content'}>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/cart' component={CartPage} />
            </main>
        </HashRouter>
    );
}

export default App;
