import { ProductList } from "./ProductData";
import "./Product.css";
import { Link } from "react-router-dom";

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
  return (
    <div className="all-products">
      {ProductList.map((product, index) => (
        <Product
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          descirption={product.descirption}
        />
      ))}
    </div>
  );
};

export default ProductsPage;
