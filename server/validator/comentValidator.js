import { z } from "zod"

const date = new Date().getFullYear()

const comentSchemma = z.object({
  id: z.number().min(1, {
    message: "Su id debe ser menor o igual que 1."
  }).int(),
  nombre: z.string({
    invalid_type_error: "Solo se aceptan textos."
  }).min(5, {
    message: "Como minimo son 5 caracteres."
  }),
  text: z.string({
    invalid_type_error: "Solo se aceptan textos en este campo."
  }).min(15),
  rating: z.number().min(1),
  fecha: z.string().datetime({ offset: true }).optional()
})

export function validateComment(obj) {
  return comentSchemma.safeParse(obj)
}