import { useParams } from "react-router-dom";
import { ProductList } from "./ProductData"; // Adjust path if necessary
import "./Product.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

const OtherProductCard = ({ id, title, descirption, img }) => {
  return (
    <div>
      <div className="card other-product-card">
        <Link to={`/product/${id}`}>
          <img
            className="card-img-top"
            src={img}
            alt={title}
            height={250}
            width={48}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {/* <p className="card-text">{descirption}</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const [visibleProducts, setVisibleProducts] = useState([0, 1]); // initial state showing first two products
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleProducts((prevVisibleProducts) => {
        const nextStartIndex =
          (prevVisibleProducts[0] + 2) % ProductList.length;
        const nextEndIndex = (prevVisibleProducts[1] + 2) % ProductList.length;
        return [nextStartIndex, nextEndIndex];
      });
    }, 5000); // change products every 5 seconds

    return () => clearInterval(interval); // cleanup interval on component unmount
  }, []);

  const { id } = useParams(); // Get the product id from the URL
  const product = ProductList.find((p) => p.id === parseInt(id)); // Find the product by id

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product does not exist
  }

  const FormatTexttoBullet = (text) => {
    // Split the text by \n and map over each section
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line.trim() && (
          <div>
            <div className="bullet-lines">
              {index > 0 && "* "}
              {line}
            </div>
            <br />
          </div>
        )}
      </React.Fragment>
    ));
  };
  const FormatTexttoParagragh = (text) => {
    // Split the text by \n and map over each section
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line.trim() && (
          <div>
            <div className="bullet-lines">
              {/* {index > 0 && "* "} */}
              {line}
            </div>
            <br />
          </div>
        )}
      </React.Fragment>
    ));
  };

  return (
    <div className="whole-product-detail-page">
      <div className="product-detail-page">
        <div className="product-detail-image-and-content">
          <div className="product-detail-image">
            <img
              className="product-detail-inside-image"
              src={product.img}
              alt={product.title}
              height={250}
              width={250}
            />
            <button
              type="button"
              class="btn btn-primary"
              style={{ marginTop: "1vh" }}
            >
              Price <span class="badge">₹4000</span>
            </button>
          </div>
          <div className="product-detail-right">
            <h1>{product.title}</h1>
            <h3>Product Information</h3>
            <p className="product-content">
              {FormatTexttoParagragh(product.content)}
            </p>
          </div>
        </div>
        <div className="product-more-detail">
          <h3>Benefits of {product.title}</h3>
          <p className="product-content">{product.benefits}</p>
        </div>
        <div className="product-more-detail">
          <h3>Side Effects of {product.title}</h3>
          <p className="product-content">
            {FormatTexttoBullet(product.sideEffects)}
          </p>
        </div>
      </div>
      <div className="other-product-cards">
        {visibleProducts.map((index) => (
          <Link to={`/product/${ProductList[index].id}`}>
            <OtherProductCard
              key={ProductList[index].id}
              id={ProductList[index].id}
              img={ProductList[index].img}
              title={ProductList[index].title}
              descirption={ProductList[index].descirption}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailPage;
