import { ProductList } from "./ProductData";
import "./Product.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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
  const [products, setProducts] = useState(ProductList); // Manage product list state
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Shift the first product to the last position
      setProducts((prevProducts) => {
        const updatedProducts = [...prevProducts];
        const firstProduct = updatedProducts.shift(); // Remove the first element
        updatedProducts.push(firstProduct); // Add it to the end
        return updatedProducts;
      });
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <div className="all-products" ref={containerRef}>
      {products.map((product, index) => (
        <div className="product" key={product.id}>
          <Product
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            descirption={product.descirption}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
