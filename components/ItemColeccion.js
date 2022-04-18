import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ItemColeccion = ({ elemento, filtro, modal, setModal, setElemento }) => {
  const handleModal = (item) => {
    setModal(!modal);
    setElemento(item);
  };

  return Object.keys(filtro).length === 0
    ? elemento.item.map((item) => (
        <div
          className="w-full bg-white shadow-md md:my-4 grid md:w-10/12 rounded-lg"
          key={item.id}
        >
          <div className="py-5 mx-auto">
            <Image
              src={item.imagen.url}
              alt={`Imagen de item ${item.titulo}`}
              width={300}
              height={300}
            />
          </div>
          <h1 className="text-center text-3xl font-['Lato'] text-[#43589F]">
            {item.titulo}
          </h1>
          <Link href={"/coleccion"} passHref>
            <input
              type="button"
              value="Agregar al carrito"
              className="text-center uppercase border-2 border-[#43589F] rounded-md w-10/12 py-3 my-3 mx-auto hover:bg-[#43589F] hover:text-white transition-colors cursor-pointer font-bold text-[#43589F]"
              onClick={() => handleModal(item)}
            />
          </Link>
        </div>
      ))
    : filtro.map(
        (f) =>
          elemento.grupo === f.grupo &&
          elemento.item.map((item) => (
            <div
              className="bg-white shadow-md my-4 grid w-10/12 mx-auto rounded-lg"
              key={item.id}
            >
              <div className="py-5 mx-auto">
                <Image
                  src={item.imagen.url}
                  alt={`Imagen de item ${item.titulo}`}
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-center text-3xl font-['Lato'] text-[#43589F]">
                {item.titulo}
              </h1>
              <Link href={"/coleccion"} passHref>
                <input
                  type="button"
                  value="Ver más"
                  className="text-center uppercase border-2 border-[#43589F] rounded-md w-10/12 py-3 my-3 mx-auto hover:bg-[#43589F] hover:text-white transition-colors cursor-pointer font-bold text-[#43589F]"
                  onClick={() => handleModal(item)}
                />
              </Link>
            </div>
          ))
      );
};

export default ItemColeccion;
