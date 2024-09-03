import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavbarComponent() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="light">
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
      </Navbar>
    </>
  );
}

export default NavbarComponent;
