import React, {Component} from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import {NavLink} from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import {withStyles} from "@material-ui/core";
import {connect} from "react-redux";
import {searchProducts} from "./features/product/actions";


const searchButtonStyles = {
    searchRoot: {
        padding: '2px 4px',
        display: 'space-around',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 10,
        flex: 1,
    },
    iconButton: {
        padding: 10,
        paddingTop: 10
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
};


class SearchField extends Component {
    constructor(...props) {
        super(...props);

        this.state = {searchValue: null};
    }
    render() {
        const { classes, searchProducts } = this.props;
        var searchValue = null;

        return (
            <Paper className={classes.searchRoot} elevation={1} >
                <NavLink to="/" className={classes.iconButton} aria-label="Search">
                </NavLink>

                <IconButton onClick={()=> searchProducts(searchValue)} className={classes.iconButton} aria-label="Menu">
                    <SearchIcon/>
                </IconButton>
                <InputBase  onChange={(event) => searchValue = event.target.value} className={classes.input} placeholder="Search products" />

            </Paper>
        );
    }
}

const mapStateToProps=(state)=>{
    return state.productsSearch
}

export default connect(mapStateToProps, {searchProducts})(withStyles(searchButtonStyles)(SearchField));