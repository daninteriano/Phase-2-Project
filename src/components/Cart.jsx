import React from 'react';
import { useCart } from "react-use-cart";


export default function Cart() {
    const { isEmpty, totalUniqueItems, items, totalItems,
        cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

    if (isEmpty) return <h1 className='text-center'>Your Cart is Empty</h1>

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {/* building out the card for the cart using table tag*/}
                            {items.map((thing, index) => {
                                return (
                                <tr key={index}>
                                    <td>
                                        <img src={thing.image} style={{ height: "6rem" }} />
                                    </td>
                                    <td>{thing.title}</td>
                                    <td>{thing.price}</td>
                                    <td>Quantity: ({thing.quantity})</td>
                                    <td>
                                        {/* adding the quantitiy functions to the buttons */}
                                        <button onClick={() => updateItemQuantity(thing.id, thing.quantity - 1)}
                                        className='btn btn-danger ms-2'>-</button>
                                        <button onClick={() => updateItemQuantity(thing.id, thing.quantity + 1)}
                                        className='btn btn-success ms-2'>+</button>
                                        <button onClick={() => removeItem(thing.id)}
                                        className='btn ms-2'>Remove Item</button>
                                    </td>
                                </tr>)
                            })}
                        </tbody>
                    </table>
                    <div className='col-auto ms-auto'>
                        <h2>Total Price:$ {cartTotal}</h2>
                    </div>
                    <div>
                        <button onClick={() => emptyCart()} className='btn btn-danger m-2'>
                            Clear Cart 
                        </button>
                        <button className='btn btn-primary m-2'>Pay Now</button>
                    </div>
                </div>
            </div>
        </section>

    )
}
