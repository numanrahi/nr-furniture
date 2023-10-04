import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="d-flex justify-content-around my-3">
        <section>Logo</section>
        <section>
          <Link className="text-decoration-none px-3">Home</Link>
          <Link className="text-decoration-none px-3">Shop</Link>
          <Link className="text-decoration-none px-3">About</Link>
          <Link className="text-decoration-none px-3">Contact</Link>
        </section>
        <section className="d-flex flex-inline gap-5">
          <div>user</div>
          <div className="btn btn-primary">Login</div>
        </section>
      </div>
    </div>
   
  );
};

export default Navbar;
