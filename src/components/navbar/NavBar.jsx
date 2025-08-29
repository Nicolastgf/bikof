import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // ← Agregamos esto
import "./NavBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container className="navbar-container">
        {/* Menú izquierdo */}
        <Nav className="left-nav d-none d-lg-flex align-items-center">
          <Link to="#" className="nav-link">LA APP</Link>
          <Link to="#" className="nav-link">PARA EMPRESAS</Link>
          <Link to="#" className="nav-link">SOBRE NOSOTROS</Link>
          <Link to="#" className="nav-link">SOBRE DESPERDICIO ALIMENTARIO</Link>
        </Nav>

        {/* Logo centrado */}
        <Navbar.Brand href="#" className="navbar-logo">
          <img src="/logo.png" alt="BIKOOF" />
        </Navbar.Brand>

        {/* Botones derechos */}
        <Nav className="right-nav d-flex align-items-center">
          <a href="#" className="btn custom-btn">DESCARGA LA APP →</a>
          <a href="#" className="btn custom-btn">REGISTRA TU NEGOCIO →</a>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
