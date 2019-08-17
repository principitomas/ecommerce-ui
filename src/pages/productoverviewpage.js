import React, {Component} from 'react';
import {connect} from "react-redux";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import AddCartIcon from '@material-ui/icons/AddShoppingCart';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import bounce from 'react-animations'
import styled,{keyframes} from 'styled-components'

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Paper from "@material-ui/core/Paper";
import Rater, {Star} from "react-rater";
import 'react-rater/lib/react-rater.css'
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import {loadProductDetails, addProductReview} from "../features/product/actions";
import withStyles from "@material-ui/core/styles/withStyles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Button from "@material-ui/core/Button";
import Rating from '@material-ui/lab/Rating';
import Box from "@material-ui/core/Box";
import {addProductToCart} from "../features/cart/actions";

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
    comment: {
        padding: '2px 4px',
        display: 'space-around',
        alignItems: 'center',
        width: 400,
        //position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%'

    },
    rating: {
        width: 200,
        display: 'flex',
        alignItems: 'center',
    }
};

const Bounce = styled.div`animation:2s ${keyframes`${bounce}`} infinite }`;

class ProductOverviewPage extends Component {
    constructor(...props) {
        super(...props);
        this.state = {searchValue: null, shouldLoadDetails: false, showCommentsInput: false, quantity: 1};
    }

    componentWillMount() {
        //this.props.loadProductDetails(this.props.match.params.id)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const newReview = this.state.newReview
    }

    componentDidMount() {
        this.props.loadProductDetails(this.props.match.params.id)
    }

    render() {
        const { cart, classes, product, addProductToCart, productDetails, addProductReview, loadProductDetails } = this.props;
        const productId = this.props.match.params.id;
        const productDetail = productDetails.find(
            function (pdt) {
                return pdt.id === 103 }//props.match.params.id }
        )

        const newReview = this.state.newReview

        return (
            (productDetail ?
                <div style={{ width: '100%', height: '100%'}}>
                    <h2>My Cart</h2>
                    <div className={classes.root}>
                        <GridList cellHeight={300} cols={'1'} className={classes.gridList}>
                            <GridListTile key="Subheader" style={{
                                marginBottom: '20px',
                                marginTop: '15px',
                                marginRight: '100px',
                                marginLeft: '100px',
                                height: 100,
                                width: '100%'
                            }}>
                            </GridListTile>

                            <GridListTile key={productDetail.id} style={{
                                marginBottom: '20px',
                                marginTop: '15px',
                                marginRight: '100px',
                                marginLeft: '100px',
                                webkitBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                mozBoxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.39)',
                                height: 750
                            }}>
                                <Grid container direction={'row'}  style={{paddingTop: '100px'}}>
                                    <Grid xs={3}  style={{height: '100%', width: '300'}}>
                                        <Carousel>
                                            <div>
                                                <img src={'https://thesmartlocal.com/wp-content/uploads/2018/10/images_easyblog_articles_7059_b2ap3_large_GoPro-Hero-7-1.jpg'} alt={productDetail.id} />
                                                {/*<p className="legend">Legend 2</p>*/}
                                            </div>
                                            <div>
                                                <img src={'https://thesmartlocal.com/wp-content/uploads/2018/10/images_easyblog_articles_7059_b2ap3_large_GoPro-Hero-7-1.jpg'} alt={productDetail.id} />
                                                {/*<p className="legend">Legend 3</p>*/}
                                            </div>
                                        </Carousel>
                                    </Grid>
                                    <Grid xs={9}>
                                        <Typography varian={'subtitle1'} style={{marginLeft: '20px', justifyContent: "space-around"}}>
                                            {productDetail.summary}
                                        </Typography>
                                        <Typography style={{marginLeft: '20px', justifyContent: "space-around"}}>
                                            {productDetail.description}
                                        </Typography>
                                        <Typography variant={"subtitle2"} style={{marginLeft: '20px', justifyContent: "space-around"}}>
                                            {'Manufacturer: ' + productDetail.manufacturer}
                                        </Typography>
                                        <Typography variant={"subtitle2"} style={{marginLeft: '20px', justifyContent: "space-around"}}>
                                            {'Model: ' + productDetail.model}
                                        </Typography>
                                        <Typography variant={"subtitle2"} style={{marginLeft: '20px', justifyContent: "space-around"}}>
                                            {'Dimensions: ' + productDetail.summary}
                                        </Typography>
                                        <Typography variant={"subtitle2"} style={{marginLeft: '20px', justifyContent: "space-around"}}>
                                            {'Price: ' + productDetail.currency + productDetail.price}
                                        </Typography>
                                        <div className={classes.rating}>
                                            <Typography style={{marginLeft: '20px', width: '100%'}}>Rating:</Typography>
                                            <Rating style={{marginLeft: '10px', width: 400}} value={this.state.newReview ? this.state.newReview.rating : productDetail.averageRating} onChange={(event, value)=> this.setState({showCommentsInput: true, newReview: { user: 'currentUser', rating: value }})}/>
                                        </div>
                                        { this.state.showCommentsInput ?
                                            <div>
                                                <Paper className={classes.comment} elevation={1}>
                                                    <InputBase  onChange={(event) => this.setState({newReview: { ...this.state.newReview, review: event.target.value}})} className={classes.input} placeholder="Add comment" />
                                                </Paper>
                                                <Button placeholder={'Add'}
                                                        onClick={()=>{
                                                            addProductReview(this.state.newReview, productDetail);
                                                            //loadProductDetails(productDetail.id);
                                                            this.setState({newReview: null, showCommentsInput: false})}}>Send</Button>
                                                <Button placeholder={'Cancel'} onClick={()=> { this.setState({showCommentsInput: false, newReview: null}) }}>Cancel</Button>
                                            </div>
                                            : null }

                                        <Paper style={{ height: '100%', paddingTop: '10px', margin: '10px 10px 10px 10px'}}>
                                            <List container xs={9} style={{ width: '100%'}}>
                                                {productDetail.reviews.map((review) => {
                                                    return (
                                                        <Grid item xs style={{padding: '5px 5px 5px 10px'}}>
                                                            {review.user + ' '}<Rating style={{marginLeft: '15px'}} value={review.rating} readOnly />
                                                            <Typography style={{marginLeft: '10px'}} variant={'h6'}>{'"' + review.review + '"'}</Typography>
                                                            <Divider/>
                                                        </Grid>

                                                    )}
                                                )}
                                            </List>
                                            <Grid>

                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
                                <GridListTileBar
                                    style={{opacity: '1'}}
                                    titlePosition={'top'}
                                    title={productDetail.name}
                                    subtitle={<span>by: {productDetail.manufacturer}</span>}
                                    actionIcon={
                                        <IconButton  onClick={()=> addProductToCart(cart, productDetail, this.state.quantity)} aria-label={`info about ${productDetail.name}`} className={classes.icon}>
                                            <AddCartIcon />
                                        </IconButton>
                                    }
                                >

                                </GridListTileBar>
                            </GridListTile>
                            ))
                        </GridList>
                    </div>
                </div>
                : null)

        );
    }
}

const mapStateToProps=(state)=> {

    return state//.productDetails.find((productDetail)=> productDetail.id === state.match.params.id)
}


function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item})
        }
    }
}


export default connect(mapStateToProps, { loadProductDetails, addProductReview, addProductToCart })(withStyles(useStyles)(ProductOverviewPage));