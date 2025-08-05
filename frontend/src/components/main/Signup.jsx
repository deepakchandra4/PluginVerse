import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";
import { useNavigate, Link } from 'react-router-dom';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  cPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const signupForm = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setIsLoading(true);
      try {
        const res = await fetch("http://localhost:5000/user/add", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (res.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'Account Created!',
            text: 'You have successfully registered. Please sign in to continue.',
            showConfirmButton: false,
            timer: 3000,
            background: 'rgba(255, 255, 255, 0.95)',
            backdrop: 'rgba(0, 0, 0, 0.4)',
            customClass: {
              popup: 'glass'
            }
          });
          navigate('/main/login');
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Registration Failed',
            text: 'Something went wrong. Please try again.',
            background: 'rgba(255, 255, 255, 0.95)',
            backdrop: 'rgba(0, 0, 0, 0.4)',
            customClass: {
              popup: 'glass'
            }
          });
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Connection Error',
          text: 'Unable to connect to server. Please try again.',
          background: 'rgba(255, 255, 255, 0.95)',
          backdrop: 'rgba(0, 0, 0, 0.4)',
          customClass: {
            popup: 'glass'
          }
        });
      } finally {
        setIsLoading(false);
        setSubmitting(false);
      }
    },
    validationSchema: SignupSchema,
  });

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className={`card glass border-0 shadow-lg ${isVisible ? 'animate-fade-in-up' : ''}`}>
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <div className="bg-success rounded-circle p-3 d-inline-block mb-3">
                    <i className="fas fa-user-plus fa-2x text-white"></i>
                  </div>
                  <h2 className="fw-bold gradient-text mb-2">Create Account</h2>
                  <p className="text-muted">Join PluginVerse and start building amazing e-commerce solutions</p>
                </div>

                <form onSubmit={signupForm.handleSubmit}>
                  <div className="mb-4">
                    <label className="form-label fw-medium" htmlFor="name">
                      <i className="fas fa-user me-2"></i>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={signupForm.values.name}
                      onChange={signupForm.handleChange}
                      onBlur={signupForm.handleBlur}
                      className={`form-control form-control-lg border-0 bg-light ${
                        signupForm.touched.name && signupForm.errors.name ? 'is-invalid' : ''
                      }`}
                      placeholder="Enter your full name"
                    />
                    {signupForm.touched.name && signupForm.errors.name && (
                      <div className="invalid-feedback d-block">
                        {signupForm.errors.name}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium" htmlFor="email">
                      <i className="fas fa-envelope me-2"></i>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={signupForm.values.email}
                      onChange={signupForm.handleChange}
                      onBlur={signupForm.handleBlur}
                      className={`form-control form-control-lg border-0 bg-light ${
                        signupForm.touched.email && signupForm.errors.email ? 'is-invalid' : ''
                      }`}
                      placeholder="Enter your email"
                    />
                    {signupForm.touched.email && signupForm.errors.email && (
                      <div className="invalid-feedback d-block">
                        {signupForm.errors.email}
                      </div>
                    )}
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
                        value={signupForm.values.password}
                        onChange={signupForm.handleChange}
                        onBlur={signupForm.handleBlur}
                        className={`form-control form-control-lg border-0 bg-light ${
                          signupForm.touched.password && signupForm.errors.password ? 'is-invalid' : ''
                        }`}
                        placeholder="Create a password"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                    {signupForm.touched.password && signupForm.errors.password && (
                      <div className="invalid-feedback d-block">
                        {signupForm.errors.password}
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-medium" htmlFor="cPassword">
                      <i className="fas fa-lock me-2"></i>
                      Confirm Password
                    </label>
                    <div className="input-group">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="cPassword"
                        name="cPassword"
                        value={signupForm.values.cPassword}
                        onChange={signupForm.handleChange}
                        onBlur={signupForm.handleBlur}
                        className={`form-control form-control-lg border-0 bg-light ${
                          signupForm.touched.cPassword && signupForm.errors.cPassword ? 'is-invalid' : ''
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                    {signupForm.touched.cPassword && signupForm.errors.cPassword && (
                      <div className="invalid-feedback d-block">
                        {signupForm.errors.cPassword}
                      </div>
                    )}
                  </div>

                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                      required
                    />
                    <label className="form-check-label text-muted" htmlFor="terms">
                      I agree to the{" "}
                      <a href="#!" className="gradient-text text-decoration-none">
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#!" className="gradient-text text-decoration-none">
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button
                    className="btn btn-success btn-lg w-100 mb-4"
                    type="submit"
                    disabled={isLoading || signupForm.isSubmitting}
                  >
                    {isLoading ? (
                      <>
                        <div className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        Creating Account...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-user-plus me-2"></i>
                        Create Account
                      </>
                    )}
                  </button>

                  <div className="text-center mb-4">
                    <p className="text-muted mb-2">Or sign up with</p>
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
                      Already have an account?{" "}
                      <Link to="/main/login" className="gradient-text fw-bold text-decoration-none">
                        Sign In
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

export default Signup;