import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStoreContext from './StoreContext';
import app_config from '../../../config';

const ShoppingCart = () => {
  const { apiUrl } = app_config;
  const { cartItems, addItemToCart, removeItemFromCart, clearCart, isInCart, getCartTotal, getCartItemsCount } = useStoreContext();

  const displayCartItems = () => {
    if (getCartItemsCount() === 0)
      return (
        <div className="text-center">
          <img src={'https://cdn.dribbble.com/users/693462/screenshots/2380486/media/b497f28a6d8d2a9323ad7cfc38753bfb.png?compress=1&resize=400x300&vertical=center'} alt="" className="rounded-start mt-4 w-25 text-center" />
          <h3>Your Cart is Currently Empty!</h3>
          <p className="text-muted">
            Before proceed to checkout you must add some products to your shopping cart. <br />
            You will fill a lot of interesting products on our "Product" page.
          </p>
          <Link className="btn rounded-pill" style={{ backgroundColor: '#4BCCF2', color: '#fff' }} to={'/browse'}>
            Return To Shop
          </Link>
        </div>
      );
    return cartItems.map((item) => (
      <div key={item._id} className="row mb-3">
        <div className="col-2">
          <div
            style={{
              backgroundSize: 'cover',
              height: '100%',
              backgroundPosition: 'center',
              backgroundImage: `url('${apiUrl}/${item.images[0]}')`
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
            <button className="btn btn-primary px-3 py-2" onClick={(e) => addItemToCart(item)}>
              {' '}
              <i class="fa fa-plus-circle" aria-hidden="true"></i>{' '}
            </button>
            <input type="text" className="form-control" value={item.quantity} />
            <button className="btn btn-primary px-3 py-2" onClick={(e) => removeItemFromCart(item)}>
              <i class="fa fa-minus-circle" aria-hidden="true"></i>
            </button>
          </div>
          <h2 className="my-2"> ₹ {item.price}</h2>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="container my-3">
        <div className="card" style={{ height: '80vh' }}>
          <div className="row g-0">
            <div className="col-md-9">
              <h2 className="mt-2 mx-3">Shopping Cart</h2>
              <hr />
              {displayCartItems()}
            </div>

            <div className="col-md-3">
              <div className="card-body">
                {/* <div className="col-md-4"> */}
                <div className="card " style={{ height: '50vh' }}>
                  <div className="card-body">
                    <h3>Order Summary</h3>
                    <hr />

                    <p>Total: {getCartTotal()}</p>
                    <p>Items: {getCartItemsCount()}</p>
                    <button className="btn btn-danger" onClick={() => clearCart()}>
                      {' '}
                      Clear Cart
                    </button>
                    <Link to="/User/CheckOutPage" className="btn btn-danger">
                      {' '}
                      CheckOut
                    </Link>
                  </div>
                </div>
                {/* </div> */}

                <div className="d-flex flex-row justify-content-start"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
