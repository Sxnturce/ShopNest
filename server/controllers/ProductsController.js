import { validateComment } from "../validator/comentValidator.js"
import { db } from "../db/database.js"

let database = [...db]

export class Products {
  static getProducts(req, res) {
    res.json(database)
  }

  static getProduct(req, res) {
    const { id } = req.params
    const filter = database.find(d => d.id === +id)

    if (!filter) {
      return res.status(400).json({ err: "Producto inexistente" })
    }

    res.json(filter)
  }

  static createComment(req, res) {
    const result = validateComment(req.body)

    if (!result.success) {
      return res.status(400).json(JSON.parse(result.error.message))
    }

    const { id } = result.data
    const finded = database.find(d => d.id === id)
    finded.comentarios = [...finded.comentarios, req.body]

    const mapeo = database.map(m => m.id === id ? { ...m, ...finded } : m)

    database = mapeo
    res.status(201).json({ msg: "Comentario creado correctamente." })
  }
}