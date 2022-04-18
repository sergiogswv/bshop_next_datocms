const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    res.json({
      msg: "La sesión ha caducado, favor de iniciar sesión",
      error: true,
    });
    return;
  }

  const user = await jwt.verify(token, process.env.JWTSECRET);

  const usuario = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
    select: {
      email: true,
      nombre: true,
      paterno: true,
    },
  });

  res.json(usuario);
}
