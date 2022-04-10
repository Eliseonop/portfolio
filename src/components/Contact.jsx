import React from "react";

export default function Contact() {
  // mis redes sociales
  return (
    // mis redes sociales
    <div className="h-96 my-80">
      <div className="h-full">
        <h1 className="text-center text-4xl my-24 " id="contacto">
          Contactame
        </h1>
        <div className="text-center font-bold flex justify-center items-center flex-col sm:flex-row gap-5">
          <div>
            <h3>Linkedln</h3>
            <a href="https://www.linkedin.com/in/eliseodev/">
              <img
                src="https://img.icons8.com/color/48/000000/linkedin.png"
                alt="linkedin"
              />
            </a>
          </div>
          <div>
            <h3>Github</h3>
            <a href="https://github.com/Eliseonop">
              <img
                src="https://img.icons8.com/color/48/000000/github.png"
                alt="github"
              />
            </a>
          </div>
        </div>
        <form
          className="flex flex-col justify-center items-center gap-4 mt-16"
          action="https://formspree.io/f/xoqrkjvj"
          method="POST"
        >
          <label className="text-center text-xl">
            <input
              type="text"
              placeholder="Nombre"
              className="border-2 border-gray-600 w-full p-2  rounded-2xl"
              name="name"
            />
          </label>
          <label className="text-center text-xl">
            <input
              name="email"
              type="text"
              placeholder="Correo"
              className="border-2 border-gray-600 w-full p-2 rounded-2xl "
            />
          </label>
          <label className="text-center text-xl">
            <textarea
              name="message"
              placeholder="Mensaje"
              className="border-2 border-gray-600 w-full p-2 rounded-2xl "
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mx-10"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
