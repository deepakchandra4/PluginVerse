import React, { useEffect, useState } from "react";
import app_config from "../../../config";
import useStoreContext from "./StoreContext";
import { Link } from "react-router-dom";


const BrowseProduct = ({includeCart}) => {
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { apiUrl } = app_config;

  const [selItem, setSelItem] = useState(null);

  const {
    addItemToCart,
    removeItemFromCart,
    isInCart,
    getCartTotal,
    getCartItemsCount,
  } = useStoreContext();

  const fetchItems = async () => {
    setLoading(true);
    const res = await fetch(`${apiUrl}/store/getall`);
    const data = await res.json();
    console.log(data);
    setItemList(data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const displayItems = () => {
    if (!loading) {
      if (itemList.length)
        return (
          <div className="row">
            {itemList.map((item, index) => (
              <div className="col-md-8 col-lg-6 col-xl-4 mb-4" key={item._id}>
                <div className="card text-black">
                  <img
                    src={apiUrl+'/'+item.images[0]}
                    className="card-img-top"
                    alt="Apple Computer"
                  />
                  <div className="card-body">
                    <div className="text-center">
                      <p className="text-muted mb-4">{item.brand}</p>
                      <h5 className="card-title">{item.title}</h5>
                    </div>
                    <div>
                      <p>{item.category}</p>
                      <p>{item.description}</p>
                    </div>
                      <span className="h3 text-primary">₹{item.price}</span>
                    <div className="d-flex justify-content-between total font-weight-bold mt-4">
                      {
                        includeCart && (
                          isInCart(item) ? (
                            <button
                              className="btn btn-danger"
                              onClick={() => removeItemFromCart(item)}
                            >
                              <i class="fas fa-cart-plus"></i> Remove From Cart
                            </button>
                          ) : (
                            <button
                              className="btn btn-primary"
                              onClick={() => addItemToCart(item)}
                            >
                              <i class="fas fa-cart-plus"></i> Add To Cart
                            </button>
                          )
                        )
                      }
                      <Link to={'/productdetails/'+item._id} className="btn btn-success">View Details</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      else return <div>No Items Found</div>;
    } else {
      return <div>Loading...</div>;
    }
  };

  return (
    <div>
      <div className="container">{displayItems()}</div>
    </div>
  );
};

export default BrowseProduct;
