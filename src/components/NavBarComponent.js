import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBarComponent() {
  return (
    <Navbar
      id="nav"
      expand="lg"
      className="bg-body-tertiary bg-dark"
      data-bs-theme="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">ANGGI IRAWAN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about-scroll">ABOUT US</Nav.Link>
            <Nav.Link href="#skills-scroll">SKILLS</Nav.Link>
            <Nav.Link href="#projects-scroll">PROJECTS</Nav.Link>
            <Nav.Link href="#contact-scroll">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;
