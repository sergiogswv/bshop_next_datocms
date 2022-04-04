import { createContext, useEffect, useState } from "react";

const LayoutContext = createContext();

const LayoutProvider = ({ children }) => {
  const [elementos, setElementos] = useState({});
  const [descargando, setDescargando] = useState(false);

  useEffect(() => {
    const consultarLayout = async () => {
      setDescargando(true);
      try {
        const url = "/api/elements";
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        setElementos(resultado);
        setTimeout(() => {
          setDescargando(false);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    };

    consultarLayout();
  }, []);

  return (
    <LayoutContext.Provider value={{ elementos, descargando }}>
      {children}
    </LayoutContext.Provider>
  );
};

export default LayoutContext;

export { LayoutProvider };
