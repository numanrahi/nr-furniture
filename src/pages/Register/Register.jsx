import React, { useContext } from "react";
import Navbar from "../Home/Navbar/Navbar";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    // createUser(email, password)
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        navigate("/");
        if (createdUser) {
          console.log("Success");
          //   Swal.fire({
          //     title: "Success!",
          //     text: "Registration Successfully",
          //     icon: "success",
          //     confirmButtonText: "Cool",
          //   });
        }
      })
      .catch((error) => {
        // toast.error(error.message);
      });
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="container py-4">
        <div className="row my-5 py-5">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">Register PLease !!</div>

            <div className="col-lg-12 login-form px-3">
              <div className="col-lg-12 login-form">
                <form name="form">
                  <div className="form-group">
                    <label className="form-control-label">Name</label>
                    <input name="name" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Email</label>
                    <input name="email" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                    />
                  </div>
                  <div className="text-center p-3">
                    If you have any Account please{" "}
                    <Link to="/login">Login</Link>
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text"></div>
                    <div className="col-lg-6 login-btm login-button">
                      <button
                        type="submit"
                        className="btn btn-outline-primary"
                        onClick={handleRegister}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
