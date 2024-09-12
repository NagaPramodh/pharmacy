import { useParams } from "react-router-dom";
import { ProductList } from "./ProductData"; // Adjust path if necessary
import "./Product.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const OtherProductCard = ({ id, title, descirption, img }) => {
  return (
    <div>
      <div className="card other-product-card">
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
    }, 3000); // change products every 3 seconds

    return () => clearInterval(interval); // cleanup interval on component unmount
  }, [ProductList.length]);

  const { id } = useParams(); // Get the product id from the URL
  const product = ProductList.find((p) => p.id === parseInt(id)); // Find the product by id

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product does not exist
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="product-detail-page">
        <div className="product-detail-image-and-content">
          <div className="product-detail-image">
            <img
              src={product.img}
              alt={product.title}
              height={250}
              width={250}
            />
          </div>
          <div className="product-detail-right">
            <h1>{product.title}</h1>
            <h3>Product Information</h3>
            <p className="product-content">{product.content}</p>
          </div>
        </div>
        <div className="product-more-detail">
          <h3>Benefits of {product.title}</h3>
          <p className="product-content">{product.benefits}</p>
        </div>
        <div className="product-more-detail">
          <h3>Side Effects of {product.title}</h3>
          <p className="product-content">{product.sideEffects}</p>
        </div>
      </div>
      <div className="other-product-cards">
        {visibleProducts.map((index) => (
          <OtherProductCard
            key={ProductList[index].id}
            id={ProductList[index].id}
            img={ProductList[index].img}
            title={ProductList[index].title}
            descirption={ProductList[index].descirption}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailPage;
