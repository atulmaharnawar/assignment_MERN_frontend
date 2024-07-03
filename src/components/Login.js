import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import './Styles/LoginStyle.css'

const Login = () => {

  const [credentials, setCredentials] = useState({ email: "", password: "" });

  let history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://assignment-mern.onrender.com/api/auth/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });
    const json = await response.json();
    if (json.success) {
      //save the authtoken and redirect
      localStorage.setItem('token', json.authToken);

      toast.success("Logged In successfully!", { autoClose: 1000 });

      setTimeout(() => {
        history('/userhome');
      }, 1500);
    }
    else {
      toast.error("Invalid Credentials!", { autoClose: 1000 });
    }
  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  const navigateToSignUp = (e) => {
    e.preventDefault();
    history('/signup')
  }

  return (

    <>


      <div className="min-vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">

                  <div className="mb-md-5 mt-md-4 pb-5">

                    <h2 className="fw-bold mb-2 text-uppercase bg-custom py-3">Login</h2>

                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                      <input type="email" id="typeEmailX" name="email" className="form-control form-control-lg " value={credentials.email}
                        onChange={onChange} />
                    </div>

                    <div data-mdb-input-init className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                      <input type="password" id="typePasswordX" name="password" className="form-control form-control-lg " value={credentials.password}
                        onChange={onChange} />
                    </div>

                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5 text-uppercase bg-custom" type="submit" onClick={handleSubmit}>Login</button>


                  </div>

                  <div>
                    <p className="mb-0">Don't have an account?</p>
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-light btn-lg px-5 text-uppercase bg-custom" type="submit" onClick={navigateToSignUp}>
                      Sign Up</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>


  );
};

export default Login;
