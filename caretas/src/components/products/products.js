import { ProductList } from "./ProductData";
import "./Product.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product = ({ id, title, descirption, img }) => {
  return (
    <div>
      <div className="card product-card">
        <Link to={`/product/${id}`}>
          <img
            className="card-img-top"
            src={img}
            alt="Card image cap"
            height={250}
            width={48}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{descirption}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  const [products] = useState([...ProductList, ...ProductList]); // Duplicate product list for smooth scrolling

  return (
    <div>
      <div className="product-header">
        <h1>Our Products</h1>
      </div>
      <div className="all-products">
        <div className="product-wrapper">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <Product
                id={product.id}
                img={product.img}
                title={product.title}
                descirption={product.descirption}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
