import React, {Component} from 'react';
import {connect} from "react-redux";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveCartIcon from '@material-ui/icons/RemoveShoppingCart';
import {makeStyles, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import bounce from 'react-animations'
import styled,{keyframes} from 'styled-components'
import * as selectors from '../features/cart/actions'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Paper from "@material-ui/core/Paper";
import {loadCart, addProductToCart} from "../features/cart/actions";
import {API} from "../config/api";
import {getCart} from "../features/cart/selectors";
import Button from "@material-ui/core/Button";
import {loadProductDetails} from "../features/product/actions";

const useStyles = {
    root: {
        display: 'flex',
        // flexWrap: 'wrap',
        justifyContent: 'center',
        //overflow: 'hidden',
        //backgroundColor: theme.palette.background.paper,
        width: '100%'
    },
    gridList: {
        justifyContent: 'center',
        display: 'flex',
        width: '100%',
        height: 'flex',
        paddingLeft: '50px',
        paddingRight: '50px',
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

const Bounce = styled.div`animation:2s ${keyframes`${bounce}`} infinite }`;

class CartPage extends Component {
    constructor(...props) {
        super(...props);
        this.state = {detailsLoaded: false}
    }

    componentWillMount() {
        this.props.loadCart(sessionStorage.getItem('user'))
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.cart && !this.state.detailsLoaded) {
            this.props.cart.items.forEach((item) => this.props.loadProductDetails(103));
            this.setState({detailsLoaded: true})
        }
    }

    render() {
        const {  classes } = this.props;
        const { cart, productDetails } = this.props;

        return (
            <div style={{ width: '100%', height: '100%', paddingTop: '10%'}}>
                {cart && productDetails ?
                    <Grid container className={classes.root} style={{ width: '100%', height: '100%'}} >

                        <Grid item xs={9}  style={{ width: '100%', height: '100%'}}>
                            <GridList cellHeight={300} cols={'1'} className={classes.gridList}>

                                {cart.items.length > 0 && productDetails.length > 0 ? cart.items.map(cartItem => {
                                        const productDetail = productDetails.find(
                                            function (pdt) {
                                                return pdt.id === 103 }//props.match.params.id }
                                        )
                                        return (
                                            <GridListTile key={cartItem.id} style={{
                                                marginBottom: '20px',
                                                marginTop: '15px',
                                                //marginRight: '100px',
                                                marginLeft: '20px',
                                                opacity:1,
                                                webkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                                mozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                                height: 'auto',
                                                width: '100%'
                                            }}>
                                                <Grid container direction={'row'}  >
                                                    <Grid xs={3}  style={{height: '100%', width: '300'}}>
                                                        <img src={'https://www.sideshow.com/product-asset/902965/feature'} alt={cartItem.id} height={100}/>
                                                        {/*<p className="legend">Legend 2</p>*/}
                                                    </Grid>
                                                    <Grid xs={9}>
                                                        <Grid container direction={'row'}>
                                                            <Typography variant={'title'}>
                                                                {productDetail.name}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid container direction={'row'}>
                                                            <Typography variant={'subtitle'}>
                                                                {productDetail.summary}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid container direction={'row'}>
                                                            <Typography>
                                                                {'Price:'}
                                                            </Typography>
                                                            <Typography>
                                                                {cartItem.price}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid container direction={'row'}>
                                                            <Typography>
                                                                {'Quantity:'}
                                                            </Typography>
                                                            <Typography>
                                                                {cartItem.quantity}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </GridListTile>)
                                    })
                                    : <Typography>Cart is empty</Typography>
                                }

                            </GridList>
                        </Grid>

                        <Grid item xs={3} style={{position: 'fix'}}>
                            <GridList cellHeight={300} cols={'1'} className={classes.gridList}>
                                <GridListTile key={'totalCard'} style={{
                                    marginBottom: '20px',
                                    marginTop: '15px',
                                    webkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                    mozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                    height: 'auto ',
                                    width: '100%'
                                }}>
                                    <Grid container direction={'column'}  style={{paddingTop: '50px', paddingLeft: 10,width: '100%'}}>
                                        <Typography variant={'subtitle'} gutterBottom>Items:</Typography>
                                        {cart.items.map((item)=> <Typography variant={'body'}>{item.price}</Typography>)}
                                        <Grid container>
                                            <Typography variant={'h6'}>Total:</Typography>
                                            <Typography variant={'h6'}>{cart.cartTotal}</Typography>
                                        </Grid>
                                        <Button variant={'contained'} color={'primary'} style={{marginLeft: '50px', marginRight: '50px', marginBottom: '10px', marginTop: '10px'}}>Place Order</Button>
                                    </Grid>
                                    <GridListTileBar
                                        style={{opacity: '1'}}
                                        titlePosition={'top'}
                                        title={'Your Order'}
                                    >
                                    </GridListTileBar>
                                </GridListTile>
                            </GridList>
                        </Grid>

                    </Grid> : <Typography>Loading Cart...</Typography>}
            </div>
        );
    }
}

const mapStateToProps=(state) =>{
    return state
}

export default connect(mapStateToProps, {loadCart, loadProductDetails})(withStyles(useStyles)(CartPage));