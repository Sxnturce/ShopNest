import express from "express"
import dotenv from "dotenv"
import cors from "./middlewares/cors.js"
import readPort from "./helpers/readPort.js"
import router from "./routes/routes.js"

dotenv.config()
const server = express()

//Middlewares
server.use(cors());
server.use(express.json())

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${readPort(port)}`);
})

server.use("/api/shop", router)