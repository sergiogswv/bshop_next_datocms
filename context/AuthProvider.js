import axios from "axios";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState({});

  useEffect(() => {
    const autenticar = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const respuesta = await axios("/api/auth", config);

        setAutenticado(respuesta.data);
      } catch (error) {
        setAutenticado({});
        console.log(error);
      }
    };

    autenticar();
  }, []);

  return (
    <AuthContext.Provider value={{ autenticado }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthProvider };
