import React, {Component} from 'react'
import ProductListItem from "./product-list-item";

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {Image} from "@material-ui/icons";
import {connect} from "react-redux";
import AddCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchField from "../../SearchField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {loadProductDetails} from "../product/actions";
import {withStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";
const useStyles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        //backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        justifyContent: 'space-around',
        display: 'flex',
        width: '90%',
        height: 'flex',
    },
    gridListItem: {
        width: 450,
        height: 450,
    }
    ,
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
};



class ProductListing extends Component {
    constructor(...props) {
        super(...props);
    }
    componentWillMount() {
        this.props.products.forEach((product) => {
            this.props.loadProductDetails(product.id)
        })
    }


    render() {

        const {classes, addToCart , products, productDetails} = this.props;

        function getDetails(productId) {
            return productDetails.find((productDetail)=> productDetail.id === productId)
        }

        return (
            <div className={classes.root}>
                <GridList cellHeight={300} cellWidth={300} cols={'5'} className={classes.gridList}>
                    {/*<GridListTile key="Subheader" style={{ height: 100, width: '100%'}}>*/}
                    {/*</GridListTile>*/}
                    {products.map((product) => {
                        var productDetail = getDetails(product.id)
                        return(
                            <GridListTile button key={product.id} style={{
                                marginBottom: '15px',
                                marginTop: '15px',
                                marginRight: '15px',
                                marginLeft: '15px',
                                webkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                mozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                width: 300,
                                height: 300
                            }}>
                                <NavLink to={'/overview/' + product.id}>
                                    <img src={'https://www.sideshow.com/product-asset/902965/feature'} alt={product.id} width={300}/>
                                    <GridListTileBar
                                        title={product.name}
                                        subtitle={<span>by: {product.manufacturer}</span>}
                                        actionIcon={
                                            <IconButton onClick={() => addToCart(product)} aria-label={`info about ${product.id}`} className={classes.icon}>
                                                <AddCartIcon />
                                            </IconButton>
                                        }
                                    >
                                        <IconButton className={classes.icon}>
                                            <AddCartIcon />
                                        </IconButton>
                                    </GridListTileBar>
                                </NavLink>
                            </GridListTile>
                        )
                    })}
                </GridList>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item})
        },
        removeFromCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    }
}

export default connect(mapStateToProps, {loadProductDetails})(withStyles(useStyles)(ProductListing));