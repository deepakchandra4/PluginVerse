import React, { useState } from "react";
import useStoreContext from "./StoreContext";

const Cart = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
    isInCart,
    getCartTotal,
    getCartItemsCount,
  } = useStoreContext();

  const displayCartItems = () => {
    if (getCartItemsCount() === 0) return <p>Cart is empty</p>;
    return cartItems.map((item) => (
      <div key={item._id} className="row mb-3">
        <div className="col-2">
          <div
            className="cart-item-placeholder"
            style={{
              backgroundImage: `url('https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp')`,
            }}
          ></div>
        </div>
        <div className="col-7">
          <p className="text-muted h6">{item.brand}</p>
          <h3>{item.title}</h3>
          <p className="text-muted">{item.description}</p>
        </div>
        <div className="col-3">
          <div className="input-group">
            <button className="btn btn-primary px-3 py-2" onClick={e => addItemToCart(item)}> <i class="fa fa-plus-circle" aria-hidden="true"></i> </button>
            <input type="text" className="form-control" value={item.quantity} />
            <button className="btn btn-primary px-3 py-2" onClick={e => removeItemFromCart(item)}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
          </div>
          <h2 className="my-2"> ₹ {item.price}</h2>
        </div>
      </div>
    ));
    // return (
    //     <>
    //         {cartItems.map((item) => (
    //             <div key={item._id}>
    //                 <img src={item.image} alt={item.name} />
    //                 <p>{item.name}</p>
    //                 <p>{item.price}</p>
    //                 <p>{item.quantity}</p>
    //                 <button className='btn btn-primary' onClick={() => addItemToCart(item)}>+</button>
    //                 <button className='btn btn-primary' onClick={() => removeItemFromCart(item)}>-</button>
    //             </div>
    //         ))}
    //     </>
    // );
  };

  return (
    <div>
      <h1>Cart</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h3>Product</h3>
            <hr />
            {displayCartItems()}
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h3>Summary</h3>
                <hr />

                <p>Total: {getCartTotal()}</p>
                <p>Items: {getCartItemsCount()}</p>
                <button className="btn btn-danger" onClick={() => clearCart()}> Clear Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
