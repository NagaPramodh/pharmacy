import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#caretas">Caretas</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#aboutUS">About Us</Nav.Link>
            <Nav.Link href="#Presence">Our Presence</Nav.Link>
            <Nav.Link href="#offerings">Our Offerings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
