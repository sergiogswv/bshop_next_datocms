import React from "react";

const login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("iniciando sesion");
  };

  return (
    <form className="bg-white mx-auto my-[10.5%] rounded-2xl grid w-5/12">
      <h1 className="text-6xl colorBase text-center font-bold my-5">Login</h1>
      <div className="grid grid-cols-[25%_75%] pt-5 mr-5">
        <label className="col-start-1 w-full text-4xl text-center">
          Correo:
        </label>
        <input
          type="text"
          name="email"
          className="col-start-2 w-full rounded-xl border-2 border-gray-400"
        />
      </div>
      <div className="grid grid-cols-[25%_75%] pt-5 mr-5">
        <label className="col-start-1 w-full text-4xl text-center">
          Password:
        </label>
        <input
          type="password"
          name="password"
          className="col-start-2 w-full rounded-xl border-2 border-gray-400"
        />
      </div>

      <input
        type="submit"
        value="Iniciar Sesión"
        className="w-1/2 mx-auto uppercase colorBase text-3xl cursor-pointer borderBase rounded-xl my-5 py-2 hover:bgBase-hover hover:text-white transition-colors"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default login;
