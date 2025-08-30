import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";

import MegaDropdownApp from "./MegaDropdown";
import MegaDropdownUstedes from "./MegaDropdownUstedes";
import MegaDropdownEmpresas from "./MegaDropdownEmpresas";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeOverlay = () => {
    setMenuOpen(false);
    setMobileSection(null);
  };

  return (
    <div onMouseLeave={() => setHovered(null)}>
      <Navbar
        expand="lg"
        fixed="top"
        className={`custom-navbar ${(scrolled || hovered || menuOpen) ? "scrolled" : ""}`}
      >
        <Container className="navbar-container">
          {/* Menú izquierdo solo desktop */}
          <div className="left-nav d-none d-lg-flex align-items-center">
            <span className="nav-link" onMouseEnter={() => setHovered("app")}>LA APP</span>
            <span className="nav-link" onMouseEnter={() => setHovered("ustedes")}>PARA USTEDES</span>
            <span className="nav-link" onMouseEnter={() => setHovered("empresas")}>PARA EMPRESAS</span>
          </div>

          {/* Logo */}
          <Navbar.Brand href="#" className="navbar-logo">
            <img src="/logo.png" alt="BIKOF" />
          </Navbar.Brand>

          {/* Botones derecha */}
          <Nav className="right-nav d-flex align-items-center">
            <a href="#" className="btn custom-btn">DESCARGA LA APP →</a>
            <a href="/registro-negocio" className="btn custom-btn d-none d-lg-inline">
              REGISTRA TU NEGOCIO →
            </a>
            {/* Hamburguesa solo mobile */}
            <div className="hamburger d-lg-none" onClick={() => setMenuOpen(true)}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/* Mega dropdowns desktop */}
      {hovered === "app" && <MegaDropdownApp visible />}
      {hovered === "ustedes" && <MegaDropdownUstedes visible />}
      {hovered === "empresas" && <MegaDropdownEmpresas visible />}

      {/* Overlay mobile */}
      {menuOpen && (
        <div className="mobile-overlay">
          {/* Header con logo, botón descarga y X */}
          <div className="mo-header">
            <img src="/logo.png" alt="BIKOF" className="mo-logo" />
            <a href="#" className="btn mo-download">DESCARGA LA APP →</a>
            <button className="mo-close" aria-label="Cerrar" onClick={closeOverlay}>✕</button>
          </div>

          {/* Lista de secciones */}
          <nav className="mo-list">
            <button className="mo-item" onClick={() => setMobileSection("app")}>
              LA APP <span className="mo-chev">›</span>
            </button>
            <button className="mo-item" onClick={() => setMobileSection("ustedes")}>
              PARA USTEDES <span className="mo-chev">›</span>
            </button>
            <button className="mo-item" onClick={() => setMobileSection("empresas")}>
              PARA EMPRESAS <span className="mo-chev">›</span>
            </button>
          </nav>

          {/* Footer con CTA */}
          <div className="mo-footer">
            <a href="/registro-negocio" className="btn mo-register">REGISTRA TU EMPRESA</a>
          </div>

          {/* Drawer lateral para submenus */}
          <div className={`mobile-drawer ${mobileSection ? "open" : ""}`}>
            <div className="md-header">
              <button className="md-back" onClick={() => setMobileSection(null)}>‹</button>
              <span className="md-title">
                {mobileSection === "app" ? "LA APP" :
                 mobileSection === "ustedes" ? "PARA USTEDES" :
                 mobileSection === "empresas" ? "PARA EMPRESAS" : ""}
              </span>
              <button className="md-close" onClick={() => setMobileSection(null)}>✕</button>
            </div>
            <div className="md-content">
              {mobileSection === "app" && <MegaDropdownApp visible />}
              {mobileSection === "ustedes" && <MegaDropdownUstedes visible />}
              {mobileSection === "empresas" && <MegaDropdownEmpresas visible />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
