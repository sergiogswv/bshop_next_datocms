import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1  md:grid-cols-3 w-full  bg-gray-300 py-5 md:py-12 h-min ">
      <div className="ml-5 md:ml-10">
        <ul className="text-left">
          <li className="pt-5 text-2xl text-[#43589F]">
            <Link href={"#"}>
              <a>Acerca de Nosotros</a>
            </Link>
          </li>
          <li className="pt-5 text-2xl text-[#43589F]">
            <Link href={"#"}>
              <a>Aviso de Privacidad</a>
            </Link>
          </li>
          <li className="pt-5 text-2xl text-[#43589F]">
            <Link href={"#"}>
              <a>Colección</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-5 md:ml-10">
        <h1 className="pt-5 text-3xl text-[#43589F] font-bold">
          Nuestras Redes Sociales
        </h1>
        <div className="pt-5 text-2xl text-[#43589F] ">
          <Link href={"#"}>
            <a>Facebook</a>
          </Link>
        </div>
        <div className="pt-5 text-2xl text-[#43589F]">
          <Link href={"#"}>
            <a>Instagram</a>
          </Link>
        </div>
      </div>
      <div>
        <h1 className=" ml-5 pt-5 text-3xl text-[#43589F] font-bold">
          Vista nuestra tienda
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
