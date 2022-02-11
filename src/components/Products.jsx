import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, []);
    // here were making the loading function for when products are rendering
    const Loading = () => {
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        ); 
    }
    const filterProduct = (cat) => {
        const updatedList = data.filter((info) => info.category === cat);
        setFilter(updatedList);
    }

    const ShowProducts = () => {
        return (
            <div className='container bg-warning bg-opacity-50 '> 
                {/* here we have the different filter options for the products */}
                <div className="buttons d-flex flex-row justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                </div>
                {filter.map((product) => {
                    return (
                        <div key={product.id} className='d-flex flex-row '>
                        <div className="col-md-3 mb-4 d-flex flex-row rounded ">
                            <div className="card h-100 text-center p-4 bg-warning" key={product.id}>
                                <img src={product.image} className="card-img-top " alt={product.title} height="250px"/>
                                    <div className="card-body bg-warning bg-opacity-50">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">
                                            ${product.price}
                                        </p>
                                        {/* buy now button */}
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                            </div>
                        </div>  
                        </div>
                    )
                })}
            </div>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row d-flex justify-content-center   `">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
