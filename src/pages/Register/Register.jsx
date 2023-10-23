import React, { useContext } from "react";
import Navbar from "../Home/Navbar/Navbar";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, user } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        navigate("/");
        if (createdUser) {
          console.log("Success");
          Swal.fire({
            title: "Success!",
            text: "Registration Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div>
        <Navbar />
      <div className="container py-4">
        <div className="w-50 mx-auto parent">
          <div className="register-box">
            <div className=" register-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className=" register-title">Register PLease !!</div>

            <div className=" register-form px-3">
              <div className=" register-form">
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

                    <button
                      type="submit"
                      className="btn btn-outline-primary w-100 my-3" 
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
