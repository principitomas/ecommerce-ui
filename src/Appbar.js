import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import * as ReactDOM from "react-dom";
import {Redirect} from "react-router";
import {NavLink} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};



// function DemoDrawer(props) {
//     const { classes } = props;
//     return (
//         <Drawer variant="permanent" classes={{paper: classes.drawerPaper}} >
//             <div className={classes.toolbar} />
//             <List>
//                 <ListItem button component="a" href="#/administration/productcatalog" >
//                     <ListItemText primary="Products Catalog" secondary="blah" />
//                 </ListItem>
//                 <Divider />
//             </List>
//         </Drawer>
//     );
// }
//
// DemoDrawer = withStyles(styles)(DemoDrawer);

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" to={"/search/SanDiego"}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        e-commerce
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const mapStateToProps=(state)=>{
    return state.productsSearch
}

export default withStyles(styles)(ButtonAppBar);