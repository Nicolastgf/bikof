import React from "react";
import "./MegaDropdown.css";

const MegaDropdown = ({ section }) => {
  const content = {
    "LA APP": [
      { title: "¿Cómo funciona la app?", desc: "Consigue comida a buen precio mientras ayudás al planeta." },
      { title: "App en tu zona", desc: "¿Dónde está disponible actualmente?" },
    ],
    "PARA EMPRESAS": [
      { title: "Aliados sostenibles", desc: "Aumentá visibilidad y reducí desperdicio." },
      { title: "Cómo funciona", desc: "Publicá tus packs sorpresa fácilmente." },
    ],
    "SOBRE NOSOTROS": [
      { title: "Nuestra misión", desc: "Salvar comida y cambiar el sistema alimentario." },
      { title: "Equipo y visión", desc: "Conocé a quienes están detrás de Bikof." },
    ],
    "SOBRE DESPERDICIO ALIMENTARIO": [
      { title: "Impacto global", desc: "1/3 de la comida se desperdicia en el mundo." },
      { title: "Consecuencias", desc: "Ambientales, económicas y sociales." },
    ],
  };

  return (
    <div className="mega-dropdown">
      <div className="dropdown-content">
        {content[section]?.map((item, i) => (
          <div className="dropdown-item" key={i}>
            <strong>{item.title}</strong>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaDropdown;
