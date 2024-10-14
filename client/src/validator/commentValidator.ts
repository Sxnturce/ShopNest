import { z } from "zod";
import type { Comment } from "../types";

const comentSchemma = z.object({
	id: z
		.number()
		.min(1, {
			message: "Su id debe ser menor o igual que 1.",
		})
		.int(),
	nombre: z
		.string({
			invalid_type_error: "Solo se aceptan textos.",
		})
		.min(5, {
			message: "Como minimo son 5 caracteres.",
		}),
	text: z
		.string({
			invalid_type_error: "Solo se aceptan textos en este campo.",
		})
		.min(15, {
			message: "Como minimo son 15 caracteres.",
		}),
	rating: z.number().min(1, {
		message: "Este campo es obligatorio.",
	}),
	fecha: z.string().datetime({ offset: true }),
});

export function validateComment(obj: Comment) {
	return comentSchemma.safeParse(obj);
}
