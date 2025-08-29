import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <section className="info-hero d-flex align-items-center justify-content-center text-center">
      <div className="container info-content">
        <h1 className="display-4 fw-bold text-white title-outline">
          SALVA BUENA COMIDA DEL DESPERDICIO
        </h1>

        <p className="lead text-white-50 mt-3">
          Con CoffeePoint ayudás al planeta, ahorrás dinero y descubrís nuevos sabores ☕
        </p>

        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <a href="#" className="btn btn-light btn-lg">Descargar la App</a>
          <a href="#" className="btn btn-outline-light btn-lg">Registra tu Empresa</a>
        </div>
      </div>
    </section>
  );
};

export default Info;
