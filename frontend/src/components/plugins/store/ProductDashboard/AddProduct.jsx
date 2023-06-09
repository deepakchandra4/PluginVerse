import { useFormik } from 'formik';
import React, { useState } from 'react';
import app_config from '../../../../config';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProduct = ({ pluginId, userId }) => {
  const url = app_config.apiUrl;
  const { themeColor, themeColorLight } = app_config;
  const navigate = useNavigate();

  const [selImage, setSelImage] = useState(null);

  const [fields, setFields] = useState([
    {
      name: 'field 1',
      value: 'value 1'
    }
  ]);

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if(!file) return;
    const fd = new FormData();
    fd.append("myfile", file);
    setSelImage(file.name);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  const itemForm = useFormik({
    initialValues: {
      title: '',
      price: 0,
      description: '',
      brand: '',
      images: [],
      quantity: 0,
      avg_rating: 0,
      reviews: [],
      features: [],
      relatedProducts: [],
      tags: [],
      category: '',
      type: '',
      user: userId,
      created_at: new Date(),
      updated_at: new Date()
    },
    onSubmit: async (values) => {
      values.images = [selImage];
      console.log(values);
      const res = await fetch(`${url}/store/add`, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(res.status);
      if (res.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Item Added Successfully!!'
        });
        // const data = (await res.json()).result;
        // navigate("/main/login");
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Some Error Occured!!'
        });
      }
    }
  });

  const displayProductForm = () => {
    return (
      <div className="col-md-8 mx-auto">
        <div className="card">
          <div
            className="card-top p-5"
            style={{
              backgroundImage: `url('https://segwitz.com/wp-content/uploads/2021/09/why-ecommerce-need-mobile-apps.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '4px 4px 0 0'
            }}
          >
            <h2 className="text-white fw-bold">Add Product Data</h2>
          </div>
          <div className="card-body">
            <form className="mx-1 mx-md-4" onSubmit={itemForm.handleSubmit}>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <div className="flex-fill mb-0">
                    <div className="input-group">
                      <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                      <input placeholder="Title" type="text" id="title" onChange={itemForm.handleChange} value={itemForm.values.title} className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="flex-fill mb-0">
                    <div className="input-group">
                      <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                      <input placeholder="Price" type="number" id="price" onChange={itemForm.handleChange} value={itemForm.values.price} className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="flex-fill mb-0">
                    <div className="input-group">
                      <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                      <input placeholder="Brand" type="text" id="brand" onChange={itemForm.handleChange} value={itemForm.values.brand} className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="flex-fill mb-0">
                    <div className="input-group">
                      <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                      <textarea
                        placeholder="Description"
                        id="description"
                        onChange={itemForm.handleChange}
                        value={itemForm.values.description}
                        className="form-control"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="flex-fill mb-0">
                    <div className="input-group">
                      <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                      <textarea placeholder="Features" id="features" onChange={itemForm.handleChange} value={itemForm.values.features} className="form-control" rows="4"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="">Quantity</label>
                  <input type="number" className="form-control" id="quantity" value={itemForm.values.quantity} onChange={itemForm.handleChange} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="">Category</label>
                  <input type="text" className="form-control" id="category" value={itemForm.values.category} onChange={itemForm.handleChange} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label htmlFor="">Upload Images</label>
                  <input type="file" className="form-control" onChange={uploadFile} />
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary btn-lg mt-4">
                  Save Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundSize: 'cover', backgroundImage: `url('https://image.slidesdocs.com/responsive-images/background/blue-white-line-e-commerce-banner-simple-powerpoint-background_bceaf9c18d__960_540.jpg')` }}>
      <section className="pt-5">{displayProductForm()}</section>
    </div>
  );
};

export default AddProduct;
