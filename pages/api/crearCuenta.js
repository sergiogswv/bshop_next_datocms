const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "POST") {
    const { password, email, nombre, paterno } = req.body;

    try {
      //Verificar si el usuario ya existe
      const existe = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (existe) {
        return res.json({
          msg: "Ya existe un usuario con este correo",
          error: true,
        });
      }
      //Hashear el pass
      const salt = await bcrypt.genSalt(10);
      const newpass = await bcrypt.hash(password, salt);

      //Vigencia de 5 dias
      const token = jwt.sign({ email }, process.env.JWTSECRET, {
        expiresIn: "5 days",
      });

      //Insertar el usuario en la bd
      await prisma.user.create({
        data: {
          nombre: nombre,
          paterno: paterno,
          email: email,
          password: newpass,
          tokenConfirmacion: token,
        },
      });

      //Regresar respuesta
      res.json({
        msg: "Usuario creado correctamente. Revisa tu email para confirmar la cuenta",
        error: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
