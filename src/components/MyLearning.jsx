import React from "react";
import Card from "../utils/Card";
import { lenguajes } from "../assets/logos/lenguajes.js";
import { frame } from "../assets/logos/frame.js";
import { diseno } from "../assets/logos/Diseno";
export default function MyLearning() {
  return (
    <div className="h-full mt-32">
      <div className="h-full ">
        <div className="text-center font-bold flex justify-center items-center flex-col">
          <h1 id="conocimientos" className="text-4xl pt-44 ">
            Mis conocimientos
          </h1>
        </div>
        <div className="text-3xl mt-16 ml-14">
          <h2>Lenguajes</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
          {lenguajes.map((lenguaje) => (
            <Card
              title={lenguaje.nombre}
              description={lenguaje.descripcion}
              image={lenguaje.imagen}
            />
          ))}
        </div>
        <div className="text-3xl mt-16 ml-14">
          <h2>Herramientas</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
          {frame.map((lenguaje) => (
            <Card
              title={lenguaje.nombre}
              description={lenguaje.descripcion}
              image={lenguaje.imagen}
            />
          ))}
        </div>
        <div className="text-3xl mt-16 ml-14">
          <h2>Diseño</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-16">
          {diseno.map((lenguaje) => (
            <Card
              title={lenguaje.nombre}
              description={lenguaje.descripcion}
              image={lenguaje.imagen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
