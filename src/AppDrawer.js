import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import {withStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

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

function AppDrawer(props) {
    const { classes } = props;
    return (
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}} >
            <div className={classes.toolbar} />
            <List>
                <ListItem button component="a" href="#/" >
                    <ListItemText primary="Home" secondary="blah" />
                </ListItem>
                <Divider />
                <ListItem button component="a" href="#/cart" >
                    <ListItemText primary="Cart" secondary="blah" />
                </ListItem>
                <Divider />
            </List>
        </Drawer>
    );
}

export default withStyles(styles)(AppDrawer);