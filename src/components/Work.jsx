import React from "react";
import proyt1 from "../assets/proyt1.png";
import imgrick from "../assets/imgrick.png";
import proyt3 from "../assets/proyt3.png";
import neocoin from "../assets/neocoin.png";
const Work = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center ">
      <div className="text-center font-bold">
        <h1 id="work" className="text-5xl my-24 ">
          Mis Proyectos
        </h1>
      </div>
      <div className="flex flex-wrap justify-center w-full md:w-2/3 ">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-wrap">
              <div className="w-full p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Ecommerce wiki
                </h2>
                <p className="text-gray-600 my-4">
                  Este es un proyecto full-syack, elaborado con Reactjs tiene un
                  backend elaborado con prisma y postgres, su funcionalidad es
                  la de un ecommerce de ropa.
                </p>
                <a href="https://e-commerce-2.vercel.app/" target="_blank">
                  <img src={proyt1} alt="proyecto1" className="w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-wrap">
              <div className="w-full p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Api rick and morty
                </h2>
                <p className="text-gray-600 my-5">
                  Este proyecto es un simple buscador de personajes de la serie
                  rick and morty, fue uno de los primeros consumos de api que
                  aprendi.
                </p>
                <a href="https://rick-api-ecru.vercel.app/" target="_blank">
                  <img src={imgrick} alt="2" className="w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-wrap">
              <div className="w-full p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Ghipy Search
                </h2>
                <p className="text-gray-600 my-5">
                  Este es un proyecto esta inspirado en un buscador de giphy,
                  buscas el ghipy que quieras usar o mirar.
                </p>
                <a href="https://ghipy.vercel.app/" target="_blank">
                  <img src={proyt3} alt="3" className="w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-wrap">
              <div className="w-full p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Neo coin (bulding...)
                </h2>
                <p className="text-gray-600 my-5">
                  Mi pequeño grupo y yo nos dispusimos ha elaborar una
                  aplicacion full-stack como Binace,en el cohorte 4 de
                  NoCountry, aun vamos por la mitad,
                </p>
                <a
                  href="https://github.com/No-Country/C4-23-t "
                  target="_blank"
                >
                  <img src={neocoin} alt="3" className="w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="bg-amber-600"></div>
      </section>
    </div>
  );
};

export default Work;
