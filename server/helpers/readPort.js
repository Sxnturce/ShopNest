import pc from "picocolors"

function readPort(port) {
  return pc.magentaBright(pc.bold(`http://localhost:${port}`))
}

export default readPort