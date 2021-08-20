import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../data'
import { useDispatch, useSelector } from 'react-redux'

import Rating from '../../components/Rating/Rating'

import './styles.css'


const ProductScreen = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    const productDetails = useSelector(state => state.productDetails);
    const {loading, product, error} = productDetails;


    return (
        <div className="row">
            <div className="col-2">
                <img src="https://johnlewis.scene7.com/is/image/JohnLewis/001202033alt4?$fashion-ui$" alt={product.name} />
            </div>
            <div className="col-1">
                <ul>
                    <li className="product__name">{product.name}</li>
                    <li>
                        <Rating
                            rating={product.rating}
                            numReviews={product.numReviews}
                        />
                    </li>
                    <li>{product.price}€</li>
                    <li>{product.description}</li>
                </ul>

            </div>
            <div className="col-1">
                <div className="card">
                    <ul>
                        <li>
                            <div className="row">
                                <div>Price</div>
                                <div className="price">{product.price}€</div>
                            </div>
                        </li>
                        <li>
                            <div className="row">
                                <div>Status</div>
                                <div className="status">
                                    {product.countInStock > 0 ?
                                        <span className="success">Count in stock</span> :
                                        <span className="error">Unavailable</span>}
                                </div>
                            </div>
                        </li>
                    </ul>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
