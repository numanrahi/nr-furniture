import React, { useContext } from "react";
import "./Login.css";
import Navbar from "../Home/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
const Login = () => {
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(email, password);
        const loggedUser = result.user;
        navigate(from, { replace: true });
        if (loggedUser) {
          Swal.fire({
            title: "Success!",
            text: "Login Successfully",
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
      <div className="w-50 mx-auto py-2 login-parent">
        <div className="login-box">
          <div className="login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="login-title">Login !!</div>

          <div className="login-form px-3">
            <div className="login-form">
              <form name="form">
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
                  If you haven't any Account please{" "}
                  <Link to="/register">Register</Link>
                </div>

                <button
                  type="submit"
                  className="btn btn-outline-primary w-100 my-3"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
