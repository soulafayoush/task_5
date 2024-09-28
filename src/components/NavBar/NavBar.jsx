import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useState, useEffect, useCallback } from "react";
import MainBtn from "../MainBtn/MainBtn";
import "./Navbar.css";

const NavBar = ({ logo, links }) => {
  const [isActive, setIsActive] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 360);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 360);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = useCallback((index) => setIsActive(index), []);

  return (
    <Navbar expand="lg" className={`navbar shadow-1 ${isMobile ? 'mobile-navbar' : ''}`}>
      <Container>
        <Navbar.Brand href="#">
          <img className="logo" src={logo} alt="logo" loading="lazy" />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0 shadow-none" aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
          <Offcanvas.Header closeButton>
            <img className="logo" src={logo} alt="logo" loading="lazy" />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="link justify-content-center flex-grow-1">
              {links.map((link, index) => (
                <Nav.Link
                  key={index}
                  href={link.url}
                  className={`px-3 fw-bold ${isActive === index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
            <MainBtn className="offcanvas-btn" />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavBar;
