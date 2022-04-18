import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alerta from "../components/Alerta";

const login = () => {
  const router = useRouter();

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email no válido")
        .required("El email es obligatorio"),
      password: Yup.string().required("El password es obligatorio"),
    }),
    onSubmit: async (values) => {
      try {
        const url = "/api/login";
        const { data } = await axios.post(url, values);

        console.log(data);
        setError(data.error);
        setMensaje(data.msg);

        console.log(error);

        if (!data.error) {
          localStorage.setItem("token", data);

          router.push("/coleccion");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="bg-white mx-auto my-[7.5%] rounded-2xl grid w-5/12">
      {error && <Alerta>{mensaje}</Alerta>}
      <form className="grid" onSubmit={formik.handleSubmit}>
        <h1 className="text-6xl colorBase text-center font-bold my-5">Login</h1>
        <div className="grid grid-cols-[25%_75%] pt-5 mr-5">
          <label className="col-start-1 w-full text-4xl text-center">
            Correo:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="col-start-2 w-full rounded-xl border-2 border-gray-400"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.email && formik.touched.email && (
          <Alerta>{formik.errors.email}</Alerta>
        )}
        <div className="grid grid-cols-[25%_75%] pt-5 mr-5">
          <label className="col-start-1 w-full text-4xl text-center">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="col-start-2 w-full rounded-xl border-2 border-gray-400"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.password && formik.touched.password && (
          <Alerta>{formik.errors.password}</Alerta>
        )}
        <input
          type="submit"
          value="Iniciar Sesión"
          className="w-1/2 mx-auto uppercase colorBase text-3xl cursor-pointer borderBase rounded-xl my-5 py-2 hover:bgBase-hover hover:text-white transition-colors"
        />
      </form>
      <div className="flex justify-evenly text-xl colorBase  ">
        <Link href={"/crear-cuenta"}>
          <a className=" hover:borderBaseBottom hover:cursor-pointer mb-5 ">
            Crear Cuenta
          </a>
        </Link>
        <Link href={"/olvide-password"}>
          <a className=" hover:borderBaseBottom hover:cursor-pointer mb-5 ">
            Olvide mi password
          </a>
        </Link>
      </div>
    </div>
  );
};

export default login;
