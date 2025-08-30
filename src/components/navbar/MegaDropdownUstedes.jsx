import React from "react";
import "./NavBar.css";
import { FaUserFriends, FaGift, FaStar } from "react-icons/fa";

const MegaDropdownUstedes = ({ visible }) => {
  if (!visible) return null;

  return (
    <div className="mega-dropdown">
      <div className="dropdown-left">
        <a href="/beneficios" className="dropdown-item">
          <FaUserFriends className="dropdown-icon" />
          <div>
            <h6>BENEFICIOS EXCLUSIVOS</h6>
            <p>Conocé lo que podés obtener al ser parte de BIKOF.</p>
          </div>
        </a>

        <a href="/membresias" className="dropdown-item">
          <FaGift className="dropdown-icon" />
          <div>
            <h6>REGALOS Y PREMIOS</h6>
            <p>Acumulá puntos y canjealos por productos o descuentos.</p>
          </div>
        </a>

        <a href="/testimonios" className="dropdown-item">
          <FaStar className="dropdown-icon" />
          <div>
            <h6>EXPERIENCIAS DE USUARIOS</h6>
            <p>Historias de quienes usan BIKOF todos los días.</p>
          </div>
        </a>
      </div>

      <div className="dropdown-right">
        <h6>SUMATE A LA COMUNIDAD</h6>
        <p>Descubrí todo lo que BIKOF tiene para vos.</p>
        <a href="/sumate" className="dropdown-link">SUMARME →</a>
        <img src="/assets/mockup-app.png" alt="Bikof App" className="dropdown-image" />
      </div>
    </div>
  );
};

export default MegaDropdownUstedes;
