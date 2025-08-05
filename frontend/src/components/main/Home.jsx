import React, { useEffect, useState } from "react";
import DeepakPic from "../images/Passport_Photograph.jpg";
import SamarthRai from '../images/SamarthRai.jpg';

const Home = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    stats: false,
    testimonials: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Hero section animation
      if (scrollY < windowHeight) {
        setIsVisible(prev => ({ ...prev, hero: true }));
      }

      // Features section animation
      if (scrollY > windowHeight * 0.5) {
        setIsVisible(prev => ({ ...prev, features: true }));
      }

      // Stats section animation
      if (scrollY > windowHeight * 1.5) {
        setIsVisible(prev => ({ ...prev, stats: true }));
      }

      // Testimonials section animation
      if (scrollY > windowHeight * 2.5) {
        setIsVisible(prev => ({ ...prev, testimonials: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible.hero ? 'animate-fade-in-up' : ''}`}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center min-vh-100">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className={`${isVisible.hero ? 'animate-fade-in-left' : ''}`}>
                <h1 className="display-3 fw-bold ls-tight mb-4">
                  <span className="text-dark">Get Plugin for</span> <br />
                  <span className="gradient-text">Your E-Commerce Website</span>
                </h1>
                <p className="lead text-muted mb-4">
                  Transform your online store with powerful, customizable plugins designed to enhance user experience and boost sales.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <button
                    className="btn btn-primary btn-lg"
                    onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <i className="fas fa-rocket me-2"></i>
                    Get Started
                  </button>
                  <button
                    className="btn btn-secondary btn-lg"
                    onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <i className="fas fa-info-circle me-2"></i>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className={`${isVisible.hero ? 'animate-fade-in-right' : ''}`}>
                <img
                  src="https://image.lexica.art/full_jpg/6d453945-5295-4380-b55a-46b99dd2c0d1"
                  className="w-100 rounded-4 shadow-5 animate-float"
                  alt="E-commerce plugins illustration"
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-5 ${isVisible.features ? 'animate-fade-in-up' : ''}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 gradient-text">Latest Plugins</h2>
            <p className="lead text-muted">Discover our most popular e-commerce plugins</p>
          </div>
          
          <div className="row gx-lg-5">
            <div className="col-md-6 mb-5">
              <div className={`card h-100 ${isVisible.features ? 'animate-fade-in-left' : ''}`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-primary rounded-circle p-3 me-3">
                      <i className="fas fa-shopping-cart text-white"></i>
                    </div>
                    <h3 className="fw-bold mb-0">Manage Cart Plugin</h3>
                  </div>
                  <div className="mb-3">
                    <span className="badge bg-danger">Business</span>
                  </div>
                  <p className="text-muted mb-3">
                    Advanced shopping cart management with real-time updates, inventory tracking, and seamless checkout experience.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li><i className="fas fa-check text-success me-2"></i>Real-time inventory updates</li>
                    <li><i className="fas fa-check text-success me-2"></i>Advanced cart analytics</li>
                    <li><i className="fas fa-check text-success me-2"></i>Multi-currency support</li>
                  </ul>
                  <button className="btn btn-primary">
                    <i className="fas fa-arrow-right me-2"></i>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className={`card h-100 ${isVisible.features ? 'animate-fade-in-right' : ''}`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-success rounded-circle p-3 me-3">
                      <i className="fas fa-search text-white"></i>
                    </div>
                    <h3 className="fw-bold mb-0">Product Browser Plugin</h3>
                  </div>
                  <div className="mb-3">
                    <span className="badge bg-primary">Search</span>
                  </div>
                  <p className="text-muted mb-3">
                    Intelligent product discovery with advanced filtering, search suggestions, and personalized recommendations.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li><i className="fas fa-check text-success me-2"></i>Smart search algorithms</li>
                    <li><i className="fas fa-check text-success me-2"></i>Advanced filtering options</li>
                    <li><i className="fas fa-check text-success me-2"></i>Personalized recommendations</li>
                  </ul>
                  <button className="btn btn-primary">
                    <i className="fas fa-arrow-right me-2"></i>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className={`card h-100 ${isVisible.features ? 'animate-fade-in-left' : ''}`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-warning rounded-circle p-3 me-3">
                      <i className="fas fa-boxes text-white"></i>
                    </div>
                    <h3 className="fw-bold mb-0">Manage Products Plugin</h3>
                  </div>
                  <div className="mb-3">
                    <span className="badge bg-warning">Management</span>
                  </div>
                  <p className="text-muted mb-3">
                    Comprehensive product management system with bulk operations, category management, and performance analytics.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li><i className="fas fa-check text-success me-2"></i>Bulk product operations</li>
                    <li><i className="fas fa-check text-success me-2"></i>Category management</li>
                    <li><i className="fas fa-check text-success me-2"></i>Performance analytics</li>
                  </ul>
                  <button className="btn btn-primary">
                    <i className="fas fa-arrow-right me-2"></i>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-5">
              <div className={`card h-100 ${isVisible.features ? 'animate-fade-in-right' : ''}`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="bg-info rounded-circle p-3 me-3">
                      <i className="fas fa-credit-card text-white"></i>
                    </div>
                    <h3 className="fw-bold mb-0">Payment Plugin</h3>
                  </div>
                  <div className="mb-3">
                    <span className="badge bg-info">Payment</span>
                  </div>
                  <p className="text-muted mb-3">
                    Secure payment processing with multiple payment gateways, fraud protection, and automated reconciliation.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li><i className="fas fa-check text-success me-2"></i>Multiple payment gateways</li>
                    <li><i className="fas fa-check text-success me-2"></i>Fraud protection</li>
                    <li><i className="fas fa-check text-success me-2"></i>Automated reconciliation</li>
                  </ul>
                  <button className="btn btn-primary">
                    <i className="fas fa-arrow-right me-2"></i>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-5 bg-light ${isVisible.stats ? 'animate-fade-in-up' : ''}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">
              <span>There are good reasons to</span>{" "}
              <span className="gradient-text">be proud</span>
            </h2>
          </div>
          <div className="row gx-lg-5">
            <div className="col-md-4 mb-5 mb-md-4">
              <div className={`text-center ${isVisible.stats ? 'animate-fade-in-left' : ''}`}>
                <div className="bg-primary rounded-circle p-4 d-inline-block mb-4 animate-pulse">
                  <i className="fas fa-smile-beam fa-2x text-white"></i>
                </div>
                <h3 className="fw-bold gradient-text mb-3 display-4">1000+</h3>
                <h5 className="text-muted mb-0">Happy Customers</h5>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-4">
              <div className={`text-center ${isVisible.stats ? 'animate-fade-in-up' : ''}`}>
                <div className="bg-success rounded-circle p-4 d-inline-block mb-4 animate-pulse">
                  <i className="fas fa-chart-line fa-2x text-white"></i>
                </div>
                <h3 className="fw-bold gradient-text mb-3 display-4">70%</h3>
                <h5 className="text-muted mb-0">Growth Rate</h5>
              </div>
            </div>
            <div className="col-md-4 mb-5 mb-md-4">
              <div className={`text-center ${isVisible.stats ? 'animate-fade-in-right' : ''}`}>
                <div className="bg-warning rounded-circle p-4 d-inline-block mb-4 animate-pulse">
                  <i className="fas fa-cogs fa-2x text-white"></i>
                </div>
                <h3 className="fw-bold gradient-text mb-3 display-4">49+</h3>
                <h5 className="text-muted mb-0">Active Projects</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-5 ${isVisible.testimonials ? 'animate-fade-in-up' : ''}`}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 gradient-text">What Our Users Say</h2>
            <p className="lead text-muted">Real feedback from satisfied customers</p>
          </div>
          <div className="row gx-lg-5">
            <div className="col-lg-6 mb-4">
              <div className={`card h-100 ${isVisible.testimonials ? 'animate-fade-in-left' : ''}`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={SamarthRai}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      alt="Samarth Rai"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="card-title mb-1">Samarth Rai</h5>
                      <h6 className="text-primary mb-0">Web Developer</h6>
                    </div>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                  </div>
                  <p className="card-text text-muted">
                    "PluginVerse has revolutionized how I build e-commerce websites. The plugins are intuitive, well-documented, and the support team is incredibly responsive."
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className={`card h-100 ${isVisible.testimonials ? 'animate-fade-in-right' : ''}`}>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={DeepakPic}
                      className="rounded-circle me-3"
                      width="60"
                      height="60"
                      alt="Deepak"
                      style={{ objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="card-title mb-1">Deepak</h5>
                      <h6 className="text-primary mb-0">Full Stack Developer</h6>
                    </div>
                  </div>
                  <div className="mb-3">
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                    <i className="fas fa-star text-warning"></i>
                  </div>
                  <p className="card-text text-muted">
                    "The quality of plugins and the ease of integration is outstanding. It has significantly reduced our development time and improved our client satisfaction."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
