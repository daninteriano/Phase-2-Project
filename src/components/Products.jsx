import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function Products() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    // const [search, setsearch] = useState('');
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

//    function handleSearchChange(event){
//         //take the input and filter out the items on the DOM
//         setsearch(event.target.value);
//         //using state to filter out card components
//    }
//    const searchFilter = filter.filter((item) => item.title.includes(search))

    const ShowProducts = () => {
        return (
            <div className='container bg-warning bg-opacity-50 rounded border border-warning border-4'> 
                {/* here we have the different filter options for the products */}
                <div className="buttons d-flex flex-row justify-content-center mb-5 mt-5 pb-5">
                    <button className="btn btn-outline-dark me-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
                    <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronic</button>
                
                </div>
                <div className='container d-flex flex-row flex-wrap'>
                    <label for="search bar"></label>
                    {/* <input value={search} onChange={handleSearchChange}></input> */}
                {filter.map((product) => {
                    return (
                        
                            <div className="card w-25 h-15 text-center p-4 m1-0 mx-0 my-0 bg-warning border-3" key={product.id}>
                                <img src={product.image} className="card-img-top " alt={product.title} height="250px"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0,12)}...</h5>
                                        <p className="card-text lead fw-bold">
                                            ${product.price}
                                        </p>
                                        {/* buy now button */}
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                            </div>
                        
                    )
                })}
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-5 fw-bolder text-center'>
                            Latest Products
                        </h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    )
}
