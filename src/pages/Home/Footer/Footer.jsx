import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        border: "1px dotted lightPink",
        borderRadius: "20px",
        padding: "20px",
      }}
      className="mb-5"
    >
      <div className="d-flex justify-content-between">
        <section>
          <div className="display-6">NR Furniture</div>
          <div className="fs-4 py-2 w-75">
            Build your dream home with our modern{" "}
            <span className="text-white" style={{ backgroundColor: "#B88E2F" }}>
              furniture
            </span>
          </div>
        </section>
        <section>
          <div>Links</div>
          <div className="row">
            <Link className="py-1 text-decoration-none">Home</Link>
            <Link className="py-1 text-decoration-none">Shop</Link>
            <Link className="py-1 text-decoration-none">About</Link>
            <Link className="py-1 text-decoration-none">Contact</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Footer;
