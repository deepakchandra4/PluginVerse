import { useFormik } from "formik";
import React, { useState } from "react";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddProduct = () => {
  const url = app_config.apiUrl;
  const { themeColor, themeColorLight } = app_config;
  const navigate = useNavigate();

  const [fields, setFields] = useState([
    {
      name: "field 1",
      value: "value 1",
    },
  ]);

  // const addField = () => {
  //   setFields([...fields, { name: "", value: "" }]);
  // };

  // const updateField = (index, key, value) => {
  //   const newField = fields[index];
  //   newField[key] = value;
  //   const newFields = [...fields];
  //   newFields[index] = newField;
  //   setFields(newFields);
  // };

  // const displyCustomFields = () => {
  //   return fields.map(({ name, value }, index) => (
  //     <div className="d-flex justify-space-between">
  //       <input
  //         type="text"
  //         className="form-control"
  //         value={name}
  //         onChange={(e) => updateField(index, "name", e.target.value)}
  //       />
  //       <span className="h3">:</span>
  //       <input
  //         type="text"
  //         className="form-control"
  //         value={value}
  //         onChange={(e) => updateField(index, "value", e.target.value)}
  //       />
  //     </div>
  //   ));
  // };

  const itemForm = useFormik({
    initialValues: {
      title: "",
      price: 0,
      description: "",
      brand: "",
      images: [],
      quantity: 0,
      avg_rating: 0,
      reviews: [],
      features: [],
      relatedProducts: [],
      tags: [],
      category: "",
      type: "",
      created_at: new Date(),
      updated_at: new Date(),
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch(`${url}/store/add`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      if (res.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Item Added Successfully!!",
        });
        // const data = (await res.json()).result;
        // navigate("/main/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Some Error Occured!!",
        });
      }
    },
  });

  return (
    <div style={{ backgroundColor: themeColorLight }}>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Add Item
                      </p>
                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={itemForm.handleSubmit}
                      >
                        <div className="flex-fill mb-0">
                          <div className="input-group">
                            <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                            <input
                              placeholder="Title"
                              type="text"
                              id="title"
                              onChange={itemForm.handleChange}
                              value={itemForm.values.title}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="flex-fill mb-0">
                          <div className="input-group">
                            <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                            <input
                              placeholder="Price"
                              type="number"
                              id="price"
                              onChange={itemForm.handleChange}
                              value={itemForm.values.price}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="flex-fill mb-0">
                          <div className="input-group">
                            <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                            <input
                              placeholder="Description"
                              type="text"
                              id="description"
                              onChange={itemForm.handleChange}
                              value={itemForm.values.description}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="flex-fill mb-0">
                          <div className="input-group">
                            <i className="fas fa-user fa-lg my-auto mx-2 fa-fw" />
                            <input
                              placeholder="Brand"
                              type="text"
                              id="brand"
                              onChange={itemForm.handleChange}
                              value={itemForm.values.brand}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg mt-4"
                          >
                            Save Item
                          </button>
                        </div>
                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="/back_img2.webp"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
