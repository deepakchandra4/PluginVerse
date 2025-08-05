import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:5000/user/authenticate", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 201) {
          Swal.fire({
            icon: "success",
            title: "Welcome Back!",
            text: "You have successfully logged in",
            showConfirmButton: false,
            timer: 2000,
            background: 'rgba(255, 255, 255, 0.95)',
            backdrop: 'rgba(0, 0, 0, 0.4)',
            customClass: {
              popup: 'glass'
            }
          });

          const data = await res.json();
          sessionStorage.setItem("user", JSON.stringify(data.result));
          navigate('/main/browse');
        } else if (res.status === 501) {
          Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Invalid email or password. Please try again.",
            background: 'rgba(255, 255, 255, 0.95)',
            backdrop: 'rgba(0, 0, 0, 0.4)',
            customClass: {
              popup: 'glass'
            }
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Connection Error",
          text: "Unable to connect to server. Please try again.",
          background: 'rgba(255, 255, 255, 0.95)',
          backdrop: 'rgba(0, 0, 0, 0.4)',
          customClass: {
            popup: 'glass'
          }
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className={`card glass border-0 shadow-lg ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="bg-primary rounded-circle p-3 d-inline-block mb-3">
                    <i className="fas fa-user-lock fa-2x text-white"></i>
                  </div>
                  <h2 className="fw-bold gradient-text mb-2">Welcome Back</h2>
                  <p className="text-muted">Sign in to your account to continue</p>
                </div>

                <form onSubmit={loginForm.handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-medium" htmlFor="email">
                      <i className="fas fa-envelope me-2"></i>
                      Email Address
                    </label>
                    <div className="input-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={loginForm.values.email}
                        onChange={loginForm.handleChange}
                        className="form-control form-control-lg border-0 bg-light"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium" htmlFor="password">
                      <i className="fas fa-lock me-2"></i>
                      Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={loginForm.values.password}
                        onChange={loginForm.handleChange}
                        className="form-control form-control-lg border-0 bg-light"
                        placeholder="Enter your password"
                        required
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label text-muted" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-decoration-none gradient-text">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    className="btn btn-primary btn-lg w-100 mb-4"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Signing In...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-sign-in-alt me-2"></i>
                        Sign In
                      </>
                    )}
                  </button>

                  <div className="text-center mb-4">
                    <p className="text-muted mb-2">Or continue with</p>
                    <div className="d-flex justify-content-center gap-3">
                      <button type="button" className="btn btn-outline-secondary btn-sm">
                        <i className="fab fa-google me-2"></i>
                        Google
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-sm">
                        <i className="fab fa-facebook-f me-2"></i>
                        Facebook
                      </button>
                      <button type="button" className="btn btn-outline-secondary btn-sm">
                        <i className="fab fa-github me-2"></i>
                        GitHub
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="mb-0 text-muted">
                      Don't have an account?{" "}
                      <Link to="/main/signup" className="gradient-text fw-bold text-decoration-none">
                        Sign Up
                      </Link>
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