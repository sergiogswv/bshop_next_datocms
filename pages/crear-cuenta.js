import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import Alerta from "../components/Alerta";

const CrearCuenta = () => {
  const router = useRouter();
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_.,$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;

  const formik = useFormik({
    initialValues: {
      nombre: "",
      paterno: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("El nombre es obligatorio")
        .min(3, "El nombre debe de ser mayor a 3 caracteres")
        .max(20, "El nombre no debe de contener más de 20 caracteres"),
      paterno: Yup.string()
        .required("El apellido paterno es obligatorio")
        .min(3, "El apellido paterno debe de ser mayor a 3 caracteres")
        .max(
          20,
          "El apellido paterno no debe de contener más de 20 caracteres"
        ),
      email: Yup.string()
        .email("Ingrese un email válido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .matches(
          regex,
          "La contraseña debe de tener 1 número, un caracter especial, mínimo 8 caracteres y maximo 20"
        ),
    }),
    onSubmit: async (values) => {
      try {
        const url = "/api/crearCuenta";
        const respuesta = await axios.post(url, values);
        console.log(respuesta.data);

        !respuesta.data.error
          ? (Swal.fire({
              position: "center",
              icon: "success",
              title: respuesta.data.msg,
              showConfirmButton: false,
              timer: 2000,
            }),
            router.push("/login"))
          : Swal.fire({
              position: "center",
              icon: "error",
              title: respuesta.data.msg,
              showConfirmButton: false,
              timer: 2000,
            });
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="bg-white mx-auto my-[7.5%] rounded-2xl grid w-5/12">
      <form className="grid" onSubmit={formik.handleSubmit}>
        <h1 className="text-6xl colorBase text-center font-bold my-5">
          Crear Nueva Cuenta
        </h1>
        <div className="grid grid-cols-[25%_75%] pt-5 mr-5">
          <label className="col-start-1 w-full text-4xl text-center">
            Nombre:
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="col-start-2 w-full rounded-xl border-2 border-gray-400 text-2xl"
          />
        </div>
        {formik.errors.nombre && formik.touched.nombre && (
          <Alerta>{formik.errors.nombre}</Alerta>
        )}
        <div className="grid grid-cols-[25%_75%] pt-5 mr-5">
          <label className="col-start-1 w-full text-4xl text-center">
            Apellido:
          </label>
          <input
            type="text"
            name="paterno"
            id="paterno"
            value={formik.values.paterno}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="col-start-2 w-full rounded-xl border-2 border-gray-400 text-2xl"
          />
        </div>
        {formik.errors.paterno && formik.touched.paterno && (
          <Alerta>{formik.errors.paterno}</Alerta>
        )}
        <div className="grid grid-cols-[25%_75%] pt-5 mr-5">
          <label className="col-start-1 w-full text-4xl text-center">
            Correo:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="col-start-2 w-full rounded-xl border-2 border-gray-400 text-2xl"
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
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="col-start-2 w-full rounded-xl border-2 border-gray-400 text-2xl"
          />
        </div>
        {formik.errors.password && formik.touched.password && (
          <Alerta>{formik.errors.password}</Alerta>
        )}

        <input
          type="submit"
          value="Crear Cuenta"
          className="w-1/2 mx-auto uppercase colorBase text-3xl cursor-pointer borderBase rounded-xl my-5 py-2 hover:bgBase-hover hover:text-white transition-colors"
          onClick={formik.handleSubmit}
        />
      </form>
      <div className="flex justify-evenly text-xl colorBase  ">
        <Link href={"/login"}>
          <a className=" hover:borderBaseBottom hover:cursor-pointer mb-5 ">
            Iniciar Sesión
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

export default CrearCuenta;
