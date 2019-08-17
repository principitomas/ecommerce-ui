import React from 'react'

export default function ProductListItem(props) {
    const  { product } = props;
    return <div>
        <h3>{ product.id }</h3>
        <img
            height={100}
            title={ product.name }
            src={product.image} />
        <div>{ product.description }</div>
        <div>${ product.price }</div>
        <div>
            <button>Add to cart</button>
        </div>
    </div>
}