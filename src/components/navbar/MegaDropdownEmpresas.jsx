import React from "react";
import "./NavBar.css";
import { FaStore, FaHandshake, FaChartLine } from "react-icons/fa";

const MegaDropdownEmpresas = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="mega-dropdown">
      <div className="dropdown-left">
        <a href="/negocio" className="dropdown-item">
          <FaStore className="dropdown-icon" />
          <div>
            <h6>¿TENÉS UN NEGOCIO?</h6>
            <p>Registralo y comenzá a formar parte del ecosistema BIKOF.</p>
          </div>
        </a>

        <a href="/asociarse" className="dropdown-item">
          <FaHandshake className="dropdown-icon" />
          <div>
            <h6>ASOCIARSE A BIKOF</h6>
            <p>Convertite en socio y accedé a clientes nuevos.</p>
          </div>
        </a>

        <a href="/estadisticas" className="dropdown-item">
          <FaChartLine className="dropdown-icon" />
          <div>
            <h6>DATOS Y ESTADÍSTICAS</h6>
            <p>Seguimiento del impacto y rendimiento de tu local.</p>
          </div>
        </a>
      </div>

      <div className="dropdown-right">
        <h6>CRECÉ CON BIKOF</h6>
        <p>Impulsá tu marca y combatí el desperdicio alimentario.</p>
        <a href="/registro-negocio" className="dropdown-link">REGISTRAR MI LOCAL →</a>
        <img src="/assets/mockup-app.png" alt="Bikof App" className="dropdown-image" />
      </div>
    </div>
  );
};

export default MegaDropdownEmpresas;
