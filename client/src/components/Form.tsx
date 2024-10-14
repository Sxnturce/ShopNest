import { useState, ChangeEvent, FormEvent } from "react";
import { Raiting } from "../data/Raiting.js";
import type { Comment } from "../types/index.js";
import { validateComment } from "../validator/commentValidator.ts";
import { clientAxios } from "../helpers/AxiosClient.ts";

type FormProp = {
	id: number;
	addComment: (item: Comment) => void;
};
export default function Form({ id, addComment }: FormProp) {
	const initialValue = {
		id: 0,
		nombre: "",
		text: "",
		rating: 0,
		fecha: "",
	};

	const errors = {
		errNombre: "",
		errText: "",
		errRating: "",
	};

	const [err, setErr] = useState(errors);
	const [data, setData] = useState<Comment>(initialValue);

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const result = e.target.name.includes("rating");

		setData({
			...data,
			id: id,
			[e.target.id]: result ? +e.target.value : e.target.value,
		});

		setErr({
			errNombre: "",
			errText: "",
			errRating: "",
		});
	}

	function changeText(e: ChangeEvent<HTMLTextAreaElement>) {
		setData({ ...data, text: e.target.value });
	}

	async function handleForm(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const result = validateComment({
			...data,
			nombre: data.nombre.trim(),
			text: data.nombre.trim(),
			fecha: new Date().toISOString(),
		});

		if (!result.success) {
			const issue = result.error.issues;
			if (issue[0].path[0] === "nombre" || issue[0].path[0] === "id") {
				setErr({ ...err, errNombre: "Este campo es obligatorio." });
				return;
			}
			if (issue[0].path[0] === "text") {
				setErr({ ...err, errText: issue[0].message });
				return;
			}

			if (issue[0].path[0] === "rating") {
				setErr({ ...err, errRating: issue[0].message });
				return;
			}
		}

		try {
			await clientAxios.post("shop/comment", {
				...result.data,
			});
			addComment({ ...data, fecha: result.data?.fecha });
			setData(initialValue);
		} catch (e) {
			console.log(e);
		}
	}

	return (
		<>
			<form
				className="flex flex-col gap-4 w-full max-w-3xl mx-auto p-4"
				onSubmit={handleForm}
			>
				<h2 className="text-2xl text-[#292929] font-bold">
					Deja un comentario
				</h2>
				<div className="flex flex-col gap-2 p-2">
					<label htmlFor="nombre" className="font-bold">
						Nombre
					</label>
					<input
						type="text"
						value={data.nombre}
						name="nombre"
						id="nombre"
						className="py-1 px-2 outline-none rounded ring-1 ring-gray-400 focus:ring-2 focus:ring-blue-700"
						onChange={handleChange}
					/>
					{err.errNombre && (
						<p className="text-sm text-red-500">{err.errNombre}</p>
					)}
				</div>
				<div className="flex flex-col gap-2 p-2">
					<label htmlFor="text" className="font-bold">
						Mensaje
					</label>
					<textarea
						name="text"
						value={data.text}
						id="text"
						className="rounded ring-1 ring-gray-400 resize-none h-20 outline-none p-2 focus:ring-2 focus:ring-blue-700"
						onChange={changeText}
					></textarea>
					{err.errText && <p className="text-sm text-red-500">{err.errText}</p>}
				</div>
				<div className="flex flex-col gap-2 p-2">
					<label htmlFor="text" className="font-bold">
						Calificación
					</label>
					<div className="flex gap-6 items-center">
						{Raiting.map((r) => (
							<div key={r.id} className="flex items-center gap-2">
								<label>{r.label}</label>
								<input
									type="radio"
									name="rating"
									id="rating"
									value={r.value}
									onChange={handleChange}
								/>
							</div>
						))}
					</div>
					{err.errRating && (
						<p className="text-sm text-red-500">{err.errRating}</p>
					)}
				</div>
				<input
					type="submit"
					value="Publicar comentario"
					className="bg-primary-color text-white py-2 px-4 font-bold  cursor-pointer rounded max-w-max mx-auto hover:bg-secondary-color transition-all ease-in-out"
				/>
			</form>
		</>
	);
}
