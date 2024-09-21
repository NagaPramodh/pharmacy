import NavbarComponent from "./components/Navbar";
import CarouselComponent from "./components/Carousel";
import FooterComponent from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsPage from "./components/products/products";
import ProductDetailPage from "./components/products/ProductDetail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{ backgroundColor: "#faf5e8" }}>
      <Router>
        <div className="whole-navbar bg-dark">
          <NavbarComponent />
        </div>
        {/* <ProductsPage /> */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <CarouselComponent />
                <ProductsPage />
              </div>
            }
          />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
