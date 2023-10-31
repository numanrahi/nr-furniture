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

  const image = products.length > 0 ? products[0].img : null;
  console.log(image);

  return (
    <div>
      <div className="text-center m-3 fs-3">Our Products</div>
      {/* <div className="d-flex cards">
        {products.slice(0, 3).map((product) => (
          <article key={product.id} class="card card-img-1">
            <div class="card__info-hover">
              <div className="btn btn-primary">Add to Cart</div>
              <div class="card__clock-info">
                <svg
                  class="card__clock"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span class="card__time">{product.price}</span>
              </div>
            </div>
            <div
              style={{ backgroundImage: `url(${product.image})` }}
              class="card__img"
            ></div>
            <a href="#" class="card_link">
              <div
                style={{ backgroundImage: `url(${product.image})` }}
                class="card__img--hover"
              ></div>
            </a>
            <div class="card__info">
              <h3 class="card__title">{product.product_name}</h3>
              <span class="card__by">
              </span>
            </div>
          </article>
        ))}
      </div> */}
      <div className="row gap-1 mx-auto justify-content-center">
        {products.slice(0, 9).map((product) => (
          <div
            key={product.id}
            className="product-card col-6 col-md-3 my-2 mx-2"
          >
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
