import React, { useState, useEffect } from 'react';
import { useUserContext } from '../../context/UserProvider';

const UserProfile = () => {
  const { user } = useUserContext();
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const userData = user || {
    name: 'John Smith',
    email: 'john.smith@example.com',
    role: 'Full Stack Developer',
    location: 'Bay Area, San Francisco, CA',
    phone: '(097) 234-5678',
    mobile: '(098) 765-4321',
    address: 'Bay Area, San Francisco, CA',
    website: 'https://mdbootstrap.com',
    github: 'mdbootstrap',
    twitter: '@mdbootstrap',
    instagram: 'mdbootstrap',
    facebook: 'mdbootstrap'
  };

  const projectStats = [
    { name: 'Web Design', progress: 80, color: 'primary' },
    { name: 'Website Markup', progress: 72, color: 'success' },
    { name: 'One Page', progress: 89, color: 'warning' },
    { name: 'Mobile Template', progress: 55, color: 'info' },
    { name: 'Backend API', progress: 66, color: 'danger' }
  ];

  const activityStats = [
    { name: 'Plugins Created', value: 12, icon: 'fas fa-puzzle-piece', color: 'primary' },
    { name: 'Downloads', value: '1.2k', icon: 'fas fa-download', color: 'success' },
    { name: 'Active Projects', value: 8, icon: 'fas fa-project-diagram', color: 'warning' },
    { name: 'Reviews', value: 45, icon: 'fas fa-star', color: 'info' }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className={`row g-4 ${isVisible ? 'animate-fade-in-up' : ''}`}>
          {/* Profile Sidebar */}
          <div className="col-lg-4">
            <div className={`card glass border-0 shadow-lg ${isVisible ? 'animate-fade-in-left' : ''}`}>
              <div className="card-body text-center p-4">
                <div className="position-relative mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid border border-3 border-primary"
                    style={{ width: 150, height: 150, objectFit: 'cover' }}
                  />
                  <div className="position-absolute bottom-0 end-0 bg-success rounded-circle p-2 border border-2 border-white">
                    <i className="fas fa-camera text-white"></i>
                  </div>
                </div>
                <h4 className="fw-bold gradient-text mb-2">{userData.name}</h4>
                <p className="text-muted mb-1">
                  <i className="fas fa-briefcase me-2"></i>
                  {userData.role}
                </p>
                <p className="text-muted mb-4">
                  <i className="fas fa-map-marker-alt me-2"></i>
                  {userData.location}
                </p>
                <div className="d-flex justify-content-center gap-2 mb-4">
                  <button type="button" className="btn btn-primary btn-sm">
                    <i className="fas fa-edit me-2"></i>
                    Edit Profile
                  </button>
                  <button type="button" className="btn btn-outline-primary btn-sm">
                    <i className="fas fa-share me-2"></i>
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`card glass border-0 shadow-lg mt-4 ${isVisible ? 'animate-fade-in-left' : ''}`}>
              <div className="card-body p-0">
                <h6 className="fw-bold p-3 mb-0 border-bottom">
                  <i className="fas fa-link me-2"></i>
                  Social Links
                </h6>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3 hover-bg-light">
                    <div className="d-flex align-items-center">
                      <i className="fas fa-globe fa-lg text-warning me-3"></i>
                      <span>Website</span>
                    </div>
                    <a href={userData.website} className="text-decoration-none gradient-text">
                      {userData.website}
                    </a>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3 hover-bg-light">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-github fa-lg text-dark me-3"></i>
                      <span>GitHub</span>
                    </div>
                    <span className="text-muted">{userData.github}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3 hover-bg-light">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-twitter fa-lg text-info me-3"></i>
                      <span>Twitter</span>
                    </div>
                    <span className="text-muted">{userData.twitter}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3 hover-bg-light">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-instagram fa-lg text-danger me-3"></i>
                      <span>Instagram</span>
                    </div>
                    <span className="text-muted">{userData.instagram}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3 hover-bg-light">
                    <div className="d-flex align-items-center">
                      <i className="fab fa-facebook-f fa-lg text-primary me-3"></i>
                      <span>Facebook</span>
                    </div>
                    <span className="text-muted">{userData.facebook}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-8">
            {/* Tabs Navigation */}
            <div className={`card glass border-0 shadow-lg mb-4 ${isVisible ? 'animate-fade-in-right' : ''}`}>
              <div className="card-body p-0">
                <ul className="nav nav-tabs nav-fill" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
                      onClick={() => setActiveTab('profile')}
                    >
                      <i className="fas fa-user me-2"></i>
                      Profile
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
                      onClick={() => setActiveTab('projects')}
                    >
                      <i className="fas fa-project-diagram me-2"></i>
                      Projects
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'activity' ? 'active' : ''}`}
                      onClick={() => setActiveTab('activity')}
                    >
                      <i className="fas fa-chart-line me-2"></i>
                      Activity
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Tab Content */}
            <div className={`${isVisible ? 'animate-fade-in-right' : ''}`}>
              {activeTab === 'profile' && (
                <div className="card glass border-0 shadow-lg">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4 gradient-text">
                      <i className="fas fa-user-circle me-2"></i>
                      Personal Information
                    </h5>
                    <div className="row g-3">
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded">
                          <i className="fas fa-user text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Full Name</small>
                            <p className="mb-0 fw-medium">{userData.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded">
                          <i className="fas fa-envelope text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Email</small>
                            <p className="mb-0 fw-medium">{userData.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded">
                          <i className="fas fa-phone text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Phone</small>
                            <p className="mb-0 fw-medium">{userData.phone}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="d-flex align-items-center p-3 bg-light rounded">
                          <i className="fas fa-mobile-alt text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Mobile</small>
                            <p className="mb-0 fw-medium">{userData.mobile}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-flex align-items-center p-3 bg-light rounded">
                          <i className="fas fa-map-marker-alt text-primary me-3"></i>
                          <div>
                            <small className="text-muted">Address</small>
                            <p className="mb-0 fw-medium">{userData.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'projects' && (
                <div className="card glass border-0 shadow-lg">
                  <div className="card-body p-4">
                    <h5 className="fw-bold mb-4 gradient-text">
                      <i className="fas fa-project-diagram me-2"></i>
                      Project Status
                    </h5>
                    {projectStats.map((project, index) => (
                      <div key={index} className="mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="fw-medium">{project.name}</span>
                          <span className="text-muted">{project.progress}%</span>
                        </div>
                        <div className="progress rounded" style={{ height: 8 }}>
                          <div
                            className={`progress-bar bg-${project.color}`}
                            role="progressbar"
                            style={{ width: `${project.progress}%` }}
                            aria-valuenow={project.progress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'activity' && (
                <div className="row g-4">
                  {activityStats.map((stat, index) => (
                    <div key={index} className="col-md-6">
                      <div className="card glass border-0 shadow-lg h-100">
                        <div className="card-body text-center p-4">
                          <div className={`bg-${stat.color} rounded-circle p-3 d-inline-block mb-3`}>
                            <i className={`${stat.icon} fa-2x text-white`}></i>
                          </div>
                          <h3 className="fw-bold gradient-text mb-2">{stat.value}</h3>
                          <p className="text-muted mb-0">{stat.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
