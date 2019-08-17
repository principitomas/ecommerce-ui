import {HashRouter, NavLink, Route} from "react-router-dom";
import Homepage from "./pages/homepage";
import CartPage from "./pages/cartpage";
import React from "react";
import useTheme from "@material-ui/core/styles/useTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import CartIcon from '@material-ui/icons/ShoppingCart';
import MailIcon from '@material-ui/icons/Mail';
import Router from "./Router";
import SearchField from "./SearchField";
import {connect} from "react-redux";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import {searchProducts} from "./features/product/actions";
import Button from "@material-ui/core/Button";
import { loadCart } from "./features/cart/actions";
import Grid from "@material-ui/core/Grid";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    menuButtonLog: {
        marginLeft: -12,
        position: 'absolute'
    }
}));


const App2 = function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const [cartLoaded, setCartLoaded] = React.useState(true);
    const [user, setUser] = React.useState(null);
    const { cart, loadCart } = props;

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function getItemQuantity(cart) {
        return cart.items ? cart.items.reduce(
            function(i, c, index, acc){
                return i + c.quantity;
            },0) : 0;
    }

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar style={{alignContent: 'right'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    {sessionStorage.getItem('user') ?
                        <div style={{width: '100%', alignContent: 'right', alignItems: 'right', display: 'flex'}}>
                            <Grid contaier xs={3}>
                            </Grid>
                            <Grid container xs={6} alignItems={'center'} justify={'center'} >
                                <SearchField />
                            </Grid>
                            <Grid container  justify={'flex-end'} xs={3}>
                                <Button onClick={
                                    (event) => {
                                        sessionStorage.clear()
                                    }} color="inherit">Logout</Button>
                            </Grid>
                        </div>
                        :
                        <div style={{width: '100%', alignContent: 'right', alignItems: 'right', display: 'flex'}}>
                            <Grid container xs={3}>
                            </Grid>
                            <Grid container xs={3}>
                            </Grid>
                            <Grid container xs={3}>
                            </Grid>
                            <Grid container xs={9} justify={'flex-end'}>
                                <Paper elevation={1}  style={{ width: 200, marginRight: '10px'}} >
                                    <InputBase onChange={(event)=> { setUser(event.target.value)}} className={classes.input} placeholder="User" />
                                </Paper>
                                <Paper elevation={1} style={{ width: 200, marginRight: '10px'}}>
                                    <InputBase  onChange={(event)=> { setUser(event.target.value)}} className={classes.input} placeholder="Password" />
                                </Paper>
                                <Button variant={'secondary'} disabled={!user} onClick={
                                    (event) => {
                                        loadCart(user)
                                        sessionStorage.setItem('user', user.toString())
                                    }} color="inherit">Login</Button>
                            </Grid>

                        </div>}
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Typography variant="h6" noWrap>
                        e-commerce
                    </Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['Home', 'Cart'].map((text, index) => (
                        <ListItem button key={text} >
                            <NavLink to={ index % 2 === 0 ? '/' : '/cart'}>
                                <ListItemIcon>{index % 2 === 0 ? <HomeIcon /> : <CartIcon />}
                                    <ListItemText primary={index % 2 === 0 ? text : text + '('+ (cart ? getItemQuantity(cart) : 0) +')'} />
                                </ListItemIcon>
                            </NavLink>
                        </ListItem>

                    ))}
                </List>
                <Divider />
            </Drawer>
            <main className={'content'} style={{width: '100%'}} >
                <Router/>
            </main>
        </div>
    );
}

const mapStateToProps=(state)=> {
    return state
}

export default connect(mapStateToProps, {searchProducts, loadCart})(App2);
