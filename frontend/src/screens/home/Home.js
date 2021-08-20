import React, { useState, useEffect } from 'react'
import './styles.css'
import { useDispatch, useSelector } from 'react-redux'

/**COMPONENTS */
import Product from '../../components/Product/Product'
import LoadingBox from '../../components/LoadingBox/LoadingBox'
import { listProducts } from '../../redux/actions/productActions'

const Home = () => {
    const dispatch = useDispatch();
    const productList = useSelector(state => state.productList);
    const {loading, products, error} = productList;

    useEffect(() => {
       dispatch(listProducts());
    }, [dispatch])

    return (
        <div className="home">
            <div className="row__products">
                {loading ? <LoadingBox />
                    : error ? <div>{error}</div>
                        : <div className="grid-container">
                            {products.map(item => {
                                return(
                                <Product 
                                    key={item._id}
                                    id={item._id}
                                    name={item.name}
                                    rating={item.rating}
                                    numReviews={item.numReviews}
                                    price={item.price}
                                />
                                )
                            })}
                        </div>
                }

            </div>
        </div>
    )
}

export default Home
