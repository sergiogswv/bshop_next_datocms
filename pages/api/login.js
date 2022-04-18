const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const { password, email } = req.body;

    try {
      //Verificar si el usuario no existe
      const usuario = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (!usuario) {
        return res.json({
          msg: "No existe ningun usuario con este email",
          error: true,
        });
      }

      //verificar el password
      const passwordConfirma = await bcrypt.compare(password, usuario.password);

      if (!passwordConfirma) {
        return res.json({
          msg: "La contraseña es incorrecta",
          error: true,
        });
      }

      if (usuario.tokenConfirmacion !== null) {
        return res.json({
          msg: "Ingresa a tu email y confirma tu cuenta",
          error: true,
        });
      }
      console.log(usuario);

      const tokenAuth = jwt.sign({ email }, process.env.JWTSECRET, {
        expiresIn: "5 days",
      });
      //Regresar respuesta
      res.json(tokenAuth);
    } catch (error) {
      console.log(error);
    }
  }
}
