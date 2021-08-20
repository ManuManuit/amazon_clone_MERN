import React from 'react'
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom';

import './Product.css';


const Product = (product) => {
    const {id, name, rating, numReviews, price, seller} = product;
    return (
        <div className="card">
        <Link to={`/product/${id}`}>
          <img className="medium" src="https://johnlewis.scene7.com/is/image/JohnLewis/001202033alt4?$fashion-ui$" alt={ name} />
        </Link>
        <div className="card-body">
          <Link to={`/product/${id}`}>
            <h2>{name}</h2>
          </Link>
          <Rating
            rating={rating}
            numReviews={numReviews}
          ></Rating>
          <div className="row">
            <div className="price">{price}€</div>
            <div>
              <Link to={`/seller/${seller}`}>
                {seller}
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Product
