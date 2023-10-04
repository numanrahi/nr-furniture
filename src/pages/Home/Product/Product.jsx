import React, { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);
  return (
    <div>
      <div className="text-center m-3 fs-3">Our Products</div>
      <div className="row gap-1 mx-auto justify-content-center">
        {products.slice(0, 9).map((product) => (
          <div key={product.id} className="product-card col-6 col-md-3 my-2 mx-2">
            <div className="py-3 text-center">
              <img src={product.img} alt="" />
            </div>
            <div className="mx-5">
              <div className="d-flex align-items-center justify-content-between">
                <div className="fs-5">{product.product_name}</div>
                <div>
                  <span>Tk. </span>
                  {product.price}
                </div>
              </div>
              <div className="btn btn-primary py-2 my-2 w-100">Add To cart</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center m-2">
      <div className="btn btn-primary px-3 py-2"> See All Products</div>
      </div>
    </div>
  );
};

export default Product;
