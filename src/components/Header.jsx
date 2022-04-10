import React, { useEffect, useState, useRef } from "react";
import Button from "../utils/Button";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Header() {
  const [background, setBackground] = useState("bg-white");
  const [color, setColor] = useState("text-slate-800 ");
  const divRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();

      console.log(y);

      const backgroundColor = y >= -9 ? "bg-white" : "bg-slate-800";
      setBackground(backgroundColor);
      const textcolor = y >= -9 ? "text-slate-800    " : "text-white ";
      setColor(textcolor);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // aqui va el togle

  // un arary

  let [open, setOpen] = useState(false);
  let links = [
    { name: "Inicio", link: "#home" },
    { name: "Proyectos ", link: "#work" },
    { name: "Conocimientos", link: "#conocimientos" },
  ];
  return (
    <div ref={divRef} id="home">
      <>
        <header className={`py-5   z-40 ${background}`}>
          <div className="shadow-md w-full fixed top-0 left-0">
            <div
              className={`md:flex items-center justify-between ${background} ${color} transition-all  py-4 md:px-10 `}
            >
              <div
                className={`font-bold text-2xl cursor-pointer flex ml-6 items-center 
              `}
              >
                Edu Falcon
              </div>

              <button
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-3 cursor-pointer md:hidden"
              >
                {open ? (
                  <CloseIcon w={23} h={23} />
                ) : (
                  <HamburgerIcon w={25} h={25} />
                )}
              </button>

              <ul
                className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  text-center md:py-1 ${background}  transition-all ${
                  open ? "top-10 " : "top-[-690px]"
                } md:opacity-100 shadow-md sm:shadow-none`}
              >
                {links.map((link) => (
                  <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                    <a
                      href={link.link}
                      className={` hover:text-gray-400 font-bold ${color}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <a href="#contacto">
                  <Button>Contactame</Button>
                </a>
              </ul>
            </div>
          </div>
        </header>
      </>
    </div>
  );
}

export default Header;
