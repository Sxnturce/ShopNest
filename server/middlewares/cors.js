import cors from "cors"

function corsOptions() {
  const corsOption = {
    origin: process.env.FRONT_URL,
    optionsSuccessStatus: 200
  }

  return cors(corsOption)
}

export default corsOptions