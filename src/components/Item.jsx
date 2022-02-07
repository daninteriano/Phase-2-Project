import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom';
import Products from './Products';
import Skeleton from 'react-loading-skeleton';

const Item = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setItem(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <div>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{lineHeight:4}}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50}/>
                    <Skeleton height={150} width={100} stlye={{marginLeft:6}}/>
                </div>
            </div>
        )
    }

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
                    <button className="btn btn-outline-dark px-4 py-2">
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
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    )
}

export default Item;
