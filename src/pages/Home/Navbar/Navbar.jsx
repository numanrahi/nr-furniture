import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="w-100 nav-bg" style={{ position: "fixed" }}>
      <div className="d-flex justify-content-between my-3">
        <section className="px-5">Logo</section>
        <section>
          <Link className="text-decoration-none px-3">Home</Link>
          <Link className="text-decoration-none px-3">Shop</Link>
          <Link className="text-decoration-none px-3">About</Link>
          <Link className="text-decoration-none px-3">Contact</Link>
        </section>
        <section className="d-flex align-items-center px-3 gap-5 ">
          <div>
            {user ? (
              <div className="col-md-3 col-10 d-flex justify-content-center align-items-center p-0">
                {user?.photoURL ? (
                  <div
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content={user.displayName}
                    className="fs-2 title-text"
                  >
                    <img className="custom-img" src={url} alt="" />
                  </div>
                ) : (
                  <div>
                    <BsPersonCircle
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={user.email}
                      className="fs-2 title-text"
                    />
                  </div>
                )}
                <div>
                  <button className="btn btn-primary ms-1 fs-5">LogOut</button>
                </div>
              </div>
            ) : (
              <div>
                <Link to="/login" className="fs-4 text-decoration-none">
                  <button className="btn btn-primary">Login</button>
                </Link>
              </div>
            )}
          </div>
          {/* {user ? (
            <div> user</div>
          ) : (
            <div>
              <div>user</div>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          )} */}
        </section>
      </div>
    </div>
  );
};

export default Navbar;
