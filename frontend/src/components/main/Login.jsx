import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {

  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch("http://localhost:5000/user/authenticate", {
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
          title: "Nice",
          text: "You have successfully logged in",
        });

        const data = await res.json();
        console.log(data);
        sessionStorage.setItem("user", JSON.stringify(data.result));
        navigate('/user/manageStorePlugin');

      } else if (res.status === 501) {
        Swal.fire({
          icon: "error",
          title: "Error!!",
          text: "Invalid Credentials",
        });
      }
    },
  });

  return (
    <section
      className="vh-100 gradient-custom"
      style={{ backgroundImage: `linear-gradient(to right, #6991ff, #da69ff)` }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body  p-5 ">
                <form onSubmit={loginForm.handleSubmit}>
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">Login</h2>
                    <p className="-50 mb-5 text-center">
                      Please enter your login and password!
                    </p>
                    <div className="form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={loginForm.values.email}
                        onChange={loginForm.handleChange}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className=" form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={loginForm.values.password}
                        onChange={loginForm.handleChange}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <p className="small mb-5 pb-lg-2">
                      <a className="-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <button
                      className="btn btn-dark btn w-100 btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="">
                        <i className="fab fa-facebook-f fa-lg" />
                      </a>
                      <a href="#!" className="">
                        <i className="fab fa-twitter fa-lg mx-4 px-2" />
                      </a>
                      <a href="#!" className="">
                        <i className="fab fa-google fa-lg" />
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;