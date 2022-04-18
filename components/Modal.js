import Image from "next/image";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Modal = ({ elemento, setModal, galeria }) => {
  const [cantidad, setCantidad] = useState(0);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  }, []);

  const handleModal = () => {
    setModal(false);
  };

  const handleCantidad = (opcion) => {
    if (cantidad === 0 && opcion === "restar") {
      return null;
    } else {
      switch (opcion) {
        case "restar":
          setCantidad((cantidad = cantidad - 1));
          return;
        case "sumar":
          setCantidad((cantidad = cantidad + 1));
          return;
      }
    }
  };

  return (
    <div className="fixed z-20 w-full h-full top-0 overflow-y-auto">
      <main className="bg-white grid grid-cols-[600px_1fr]">
        <div className="col-start-1 my-auto">
          <Image
            alt="Imagen"
            src={elemento.imagen.url}
            width={550}
            height={600}
          />
        </div>
        <div className="col-start-2">
          {/* Bototn de cerrar */}
          <button
            className="fixed right-5 my-4 text-2xl border-2 borderBase px-2 hover:bgBase-hover"
            onClick={handleModal}
          >
            X
          </button>

          <h1 className="text-center text-6xl font-bold colorBase mt-2">
            Globos de {elemento.categoria}
          </h1>
          {/* TODO Agregar la coleccion de adornos*/}
          {/* Ejemplos de adornos */}
          <div className="h-auto mt-5">
            {cargando ? (
              <div className="flex justify-center ">
                <Spinner />
              </div>
            ) : (
              galeria.allGaleries.map(
                (imagen) =>
                  imagen.categoria === elemento.categoria && (
                    <>
                      <div className="grid grid-cols-4 ">
                        {imagen.imagen[0].galery.map((i) => (
                          <div key={i.id}>
                            {/* <Image
                              alt={`Imagenes`}
                              width={300}
                              height={250}
                              src={i.url}
                              layout='responsive'
                            /> */}
                            <img
                              alt={`Imagenes`}
                              src={i.url}
                              className="object-cover w-full h-3/4 px-2"
                            />
                          </div>
                        ))}
                      </div>
                      {/* Botones */}
                      <div className="flex justify-center mt-5">
                        {/* Menos */}
                        <button
                          onClick={() => handleCantidad("restar")}
                          className="mx-5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                        {/* Cantidad */}
                        <p className="text-5xl">{cantidad}</p>
                        {/* Mas */}
                        <button
                          onClick={() => handleCantidad("sumar")}
                          className="mx-5"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>
                      </div>
                      <button className="grid mx-auto colorBase borderBase border-2 hover:bgBase-hover hover:text-white uppercase my-10 text-2xl px-10 rounded-2xl py-3">
                        Agregar al carrito
                      </button>
                    </>
                  )
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Modal;
