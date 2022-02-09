import React from 'react';
import { useCart } from "react-use-cart";


export default function Cart() {
  const { isEmpty, totalUniqueItems, items, totalItems, 
    cartTotal, updateItemQuantity, removeItem, emptyCart} = useCart();
    if(isEmpty)return <h1 className='text-center'>Your Cart is Empty</h1>

    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        {items.map((thing, index) => {
                            <tr key={index}>
                                <td>
                                    <img src={thing.img} style={{height: "6rem"}}/>
                                </td>
                                <td>{thing.title}</td>
                                <td>{thing.price}</td>
                                <td>Quantity: ({thing.quantity})</td>
                                
                            </tr>
                        })}
                    </table>
                </div>
            </div>
        </section>
      
  )
}
