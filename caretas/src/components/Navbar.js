import React, { useState } from "react";
import { ProductList } from "../components/products/ProductData";
import "./Footer.css";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Handle input change and filter products
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = ProductList.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Clear suggestions when input is empty
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#aboutUS">
          Caretas
        </a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#Presence">
              Our Presence
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link disabled" href="#offerings">
              Our Offerings
            </a>
          </li>
        </ul>

        {/* Search Input */}
        <form className="form-inline my-2 my-lg-0">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {filteredProducts.length > 0 && (
              <ul className="list-group position-absolute suggestion-container">
                {filteredProducts.map((product) => (
                  <Link
                    to={`/product/${product.id}`}
                    onClick={() => {
                      setFilteredProducts([]);
                      setSearchTerm("");
                    }}
                  >
                    <li key={product.id} className="list-group-item">
                      {product.title}
                    </li>
                  </Link>
                ))}
              </ul>
            )}
          </div>
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* Suggestion Dropdown */}
      </div>
    </nav>
  );
};

export default NavbarComponent;
