import React, {Component} from 'react';

import ProductListing from "../features/product-listing";
import data from '../data/products.json'
import  * as actions from "../features/product/actions";
import {connect} from "react-redux";
import Paper from "@material-ui/core/Paper";
import {NavLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import {withStyles} from "@material-ui/core";

const searchButtonStyles = {
    root: {
        padding: '2px 4px',
        display: 'space-around',
        alignItems: 'center',
        width: 400,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%'

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


class Homepage extends Component {
    constructor(...props) {
        super(...props);

        this.state = {searchValue: null, shouldLoadDetails: false};
    }
    componentDidMount() {
        // if (this.props.productsSearch) {
        //     this.props.productsSearch.forEach((product) => {
        //         this.props.loadProductDetails(product.id)
        //     })
        // }
    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //
    //     if (this.props.productsSearch.length > 0 && this.state.shouldLoadDetails) {
    //         this.props.productsSearch.forEach((product) => {
    //             this.props.loadProductDetails(product.id)
    //         })
    //         this.setState({shouldLoadDetails: false})
    //     }
    // }


    render() {
        const { searchProducts, loadProductDetails,classes, productsSearch } = this.props;

        return (
            <div>
                <h1>Homepage</h1>
                {/*<Paper className={classes.root} elevation={1}>*/}
                {/*    <IconButton onClick={()=> {searchProducts(this.state.searchValue); this.setState({shouldLoadDetails: true})} } className={classes.iconButton} aria-label="Menu">*/}
                {/*        <SearchIcon/>*/}
                {/*    </IconButton>*/}
                {/*    <InputBase  onChange={(event) => this.setState({searchValue: event.target.value})} className={classes.input} placeholder="Search products" />*/}
                {/*</Paper>*/}
                <ProductListing products={productsSearch}/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return state
}

export default connect(mapStateToProps, actions)(withStyles(searchButtonStyles)(Homepage));