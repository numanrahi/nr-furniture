import React from "react";
import "./Login.css";
import Navbar from "../Home/Navbar/Navbar";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container py-4">
        <div class="row my-5 py-5">
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title">Login PLease !!</div>

            <div class="col-lg-12 login-form px-3">
              <div class="col-lg-12 login-form">
                <form>
                  <div class="form-group">
                    <label class="form-control-label">USERNAME</label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label class="form-control-label">PASSWORD</label>
                    <input type="password" class="form-control" />
                  </div>
                  <div className="text-center p-3">If you haven't any Account please <Link to="/register">Register</Link></div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-6 login-btm login-button">
                      <button type="submit" class="btn btn-outline-primary">
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
