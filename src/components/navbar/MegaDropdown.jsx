import React from "react";
import "./NavBar.css";
import { FaBoxOpen, FaMobileAlt, FaMapMarkedAlt } from "react-icons/fa";

const MegaDropdownApp = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="mega-dropdown">
      <div className="dropdown-left">
        <a href="/como-funciona" className="dropdown-item">
          <FaMobileAlt className="dropdown-icon" />
          <div>
            <h6>¿CÓMO FUNCIONA LA APLICACIÓN?</h6>
            <p>Accedé a membresías y promociones de calidad a buen precio.</p>
          </div>
        </a>

        <a href="/membresia" className="dropdown-item">
          <FaBoxOpen className="dropdown-icon" />
          <div>
            <h6>¿CÓMO HACERME MIEMBRO BIKOF?</h6>
            <p>Pagalo desde la app o llegate a algún punto de locación.</p>
          </div>
        </a>

        <a href="/zonas" className="dropdown-item">
          <FaMapMarkedAlt className="dropdown-icon" />
          <div>
            <h6>BIKOF EN MI ZONA</h6>
            <p>¿Dónde está disponible Bikof ahora mismo?</p>
          </div>
        </a>
      </div>

      <div className="dropdown-right">
        <h6>LOCALIZA NUESTRAS SUCURSALES</h6>
        <p>Buscá local para encontrar nuestros beneficios.</p>
        <a href="/buscar" className="dropdown-link">BUSCAR →</a>
        <img src="/assets/mockup-app.png" alt="Bikof App" className="dropdown-image" />
      </div>
    </div>
  );
};

export default MegaDropdownApp;
