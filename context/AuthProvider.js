import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [autenticado, setAutenticado] = useState(false);

  return (
    <AuthContext.Provider value={{ autenticado }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export { AuthProvider };
