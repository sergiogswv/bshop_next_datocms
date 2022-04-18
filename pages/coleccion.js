import { useState, useEffect } from "react";
import { request } from "../lib/datocms";
import ItemColeccion from "../components/ItemColeccion";
import Modal from "../components/Modal";

const Coleccion = ({ elementos, galeria }) => {
  const [mostrar, setMostrar] = useState(false);
  const [elementosConsulta, setElementosConsulta] = useState({});
  const [filtro, setFiltro] = useState([]);
  const [modal, setModal] = useState(false);
  const [elemento, setElemento] = useState({});

  useEffect(() => {
    setElementosConsulta(elementos.allColeccionfulls);
  }, [elementos.allColeccionfulls]);

  const mostrarFiltros = () => {
    setMostrar(!mostrar);
  };

  const seleccionFiltro = (datos) => {
    const existe = filtro.find((item) => item.id === datos.id);
    if (existe) {
      setFiltro(filtro.filter((f) => f.id !== datos.id));
    } else {
      setFiltro([...filtro, datos]);
    }
  };

  return (
    <>
      <h1 className="pt-5 text-3xl text-center font-bold colorBase">
        Nuestra Colección
      </h1>
      <main className="min-h-screen">
        <div className="flex md:ml-12 sm:mb-5">
          <button
            type="button"
            onClick={() => mostrarFiltros()}
            className="flex gap-4 text-6xl items-center"
          >
            Filtros
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-[50px_repeat(3,1fr)_50px] md:col-start-2 md:col-span-3">
          {/* Mostrar Filtros - Div Filtros */}
          <div
            className={`${
              mostrar
                ? "filter relative mb-5 w-full sm:w-11/12 md:relative md:col-start-2 md:col-span-1 rounded-md"
                : "hidden md:w-0"
            }`}
          >
            {/* Filtros */}
            <div className="flex flex-col ml-5 pt-3 ">
              <h1 className="text-6xl">Tipos:</h1>
              {Object.keys(elementosConsulta).length > 0 &&
                elementosConsulta.map((elemento) => (
                  <div key={elemento.id} className="pt-7 ml-3">
                    <label className="mt-2 text-4xl">
                      <input
                        type="checkbox"
                        className="mr-2"
                        value={elemento.grupo}
                        name={elemento.grupo}
                        onChange={(e) =>
                          seleccionFiltro({
                            grupo: e.target.value,
                            id: elemento.id,
                          })
                        }
                      />
                      {elemento.grupo}
                    </label>
                  </div>
                ))}
            </div>
          </div>

          {/* Div de Items */}
          <div
            className={`${
              mostrar
                ? "md:col-start-3 md:col-span-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 " //mostrar
                : "md:w-full md:col-start-2 md:col-span-4 mx-auto grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" // no se muestra
            }  `}
          >
            {/* Items */}
            {Object.keys(elementosConsulta).length > 0 &&
              elementosConsulta.map((elemento) => (
                <ItemColeccion
                  key={elemento.id}
                  elemento={elemento}
                  filtro={filtro}
                  modal={modal}
                  setModal={setModal}
                  setElemento={setElemento}
                />
              ))}
          </div>

          {modal && (
            <Modal
              elemento={elemento}
              setModal={setModal}
              galeria={galeria}
            ></Modal>
          )}
        </div>
      </main>
    </>
  );
};
Coleccion.defaultProps = {
  elementosConsulta: {},
};

export default Coleccion;

export async function getServerSideProps() {
  const elementos = await request({
    query: `query{
      allColeccionfulls {
        id
        grupo
        item{
          id
          imagen{
            url
          }
          slug
          titulo
          categoria
        }
      }
    }
    `,
  });

  const galeria = await request({
    query: `query{
      allGaleries{
        categoria
        id
        imagen{
          id
          galery{
            id
            url
          }
        }
      }
    }`,
  });

  return {
    props: {
      elementos,
      galeria,
    },
  };
}
