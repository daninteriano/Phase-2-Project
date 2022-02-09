import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import Products from './Products';
import { useCart } from 'react-use-cart';

const Item = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const { addItem } = useCart();

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setItem(await response.json());
        }
        getProduct();
    }, []);

    const ShowProduct = () => {
        return (
            <div>
                <div className="col-md-6">
                    <img src={item.image} alt={item.title}
                        height="400px" width="400px" />
                </div>
                <div className="col-md-6">
                    <h4 className='text-uppercase text-black-50'>
                        {item.category}
                    </h4>
                    <h1 className='display-5'>{item.title}</h1>
                    <p className="lead fw-bolder">
                        Rating {item.rating && item.rating.rate}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        ${item.price}
                    </h3>
                    <p className="lead">{item.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2" 
                    onClick={() => addItem(item)}>
                        Add to Cart
                    </button>
                    <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
                        Go to Cart
                    </NavLink>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                     <ShowProduct />
                </div>
            </div>
        </div>
    )
}

export default Item;
