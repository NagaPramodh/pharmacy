import { useParams } from "react-router-dom";
import { ProductList } from "./ProductData"; // Adjust path if necessary
import "./Product.css";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = ProductList.find((p) => p.id === parseInt(id)); // Find the product by id

  if (!product) {
    return <div>Product not found</div>; // Handle the case where the product does not exist
  }

  return (
    <div className="product-detail-page">
      <h1>{product.title}</h1>
      <img src={product.img} alt={product.title} />
      <p className="product-content">{product.content}</p>
    </div>
  );
};

export default ProductDetailPage;
