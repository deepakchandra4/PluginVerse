import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import app_config from '../../../config';
import useStoreContext from './StoreContext';

const ProductDetails = ({includeCart}) => {
  const { id } = useParams();
  const { apiUrl } = app_config;
  const [productData, setProductData] = useState(null);

  const {
    addItemToCart,
    removeItemFromCart,
    isInCart,
    getCartTotal,
    getCartItemsCount,
  } = useStoreContext();

  const getProductData = async () => {
    const response = await fetch(`${apiUrl}/store/getbyid/${id}`);
    const data = await response.json();
    console.log(data);
    setProductData(data.result);
  };

  useEffect(() => {
    getProductData();
  }, []);

  const displayProduct = () => {
    if (productData) {
      return (
        <div className="container">
          <div className="card">
            <div className="row">
              <div className="col-md-4">
                <img className="img-fluid" src={apiUrl + '/' + productData.images[0]} alt="" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <p className='m-0 h5'>{productData.brand}</p>
                  <p className='m-0 display-4'>{productData.title}</p>
                  <p className='mt-5'>{productData.description}</p>
                  <ul className='list-group'>
                    {
                      productData.features.map((item, index) => (
                        <li className='list-group-item' key={index}>{item}</li>
                      ))
                    }
                  </ul>

                  <h1 className='mt-4'>₹{productData.price}</h1>
                  {
                        includeCart && (
                          isInCart(productData) ? (
                            <button
                              className="btn btn-danger"
                              onClick={() => removeItemFromCart(productData)}
                            >
                              <i class="fas fa-cart-plus"></i> Remove From Cart
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary"
                              onClick={() => addItemToCart(productData)}
                            >
                              <i class="fas fa-cart-plus"></i> Add To Cart
                            </button>
                          )
                        )
                      }
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{displayProduct()}</div>;
};

export default ProductDetails;
