import React from 'react';
import { useUserContext } from '../../context/UserProvider';

const UserAuth = ({ children }) => {
  const { loggedIn } = useUserContext();

  if (!loggedIn) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body text-center">
                <h3>Please Login to Continue</h3>
                <p>You need to be logged in to access this page.</p>
                <a href="/main/login" className="btn btn-primary">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default UserAuth;