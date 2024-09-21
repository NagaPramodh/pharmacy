import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./products/Product.css";

function NavbarComponent() {
  return (
    <>
      {/* <Navbar bg="dark" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#caretas">Caretas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#aboutUS" style={{ color: "white" }}>
              About Us
            </Nav.Link>
            <Nav.Link href="#Presence" style={{ color: "white" }}>
              Our Presence
            </Nav.Link>
            <Nav.Link href="#offerings" style={{ color: "white" }}>
              Our Offerings
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <div className="whole-navbar"> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#aboutUS">
            Caretas
          </a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                About Us <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#Presence">
                Our Presence
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link disabled" href="#offerings">
                Our Offerings
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavbarComponent;
