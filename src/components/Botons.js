import { useState } from "react";
import '../css/css-components/botons.css';
import Desayuno from '../components/Desayuno';
import Almuerzo from '../components/Almuerzo';

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
      

      <div className={tabState === 1 ? "content  active-content" : "content"}>
        <Desayuno/>
      </div>

      <div className={tabState === 2 ? "content  active-content" : "content"}>
      <Almuerzo/>
      </div>

    </div>
  )
}