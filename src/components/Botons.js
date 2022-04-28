import { useState } from "react";
import '../css/css-components/botons.css';

export default function Botons() {
  const [tabState, settabState] = useState(1);

  const tabValue = (index) => {
    settabState(index);
  };
  return (
    <div>

      <div className="d-flex justify-content-start">
        <button
          className={
            tabState === 1
              ? "tabs-productos active-tabs-productos"
              : "tabs-productos"
          }
          onClick={() => tabValue(1)}
        >
          <p className="desayuno">
            Desayuno
          </p>
        </button>
        <button
          className={
            tabState === 2
              ? "tabs-productos active-tabs-productos"
              : "tabs-productos"
          }
          onClick={() => tabValue(2)}
        >
          <p className="almuerzo">
            Almuerzo
          </p>
        </button>
      </div>
      {/* Componente form */}

      <div className={tabState === 1 ? "content  active-content" : "content"}>
        {/* Convertir a archivo .json para mostrarlo */}

      </div>

      <div className={tabState === 2 ? "content  active-content" : "content"}>

      </div>

    </div>
  )
}