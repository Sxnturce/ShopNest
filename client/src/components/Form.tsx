import { Raiting } from "../data/Raiting.js";

export default function Form() {
	return (
		<>
			<form className="flex flex-col gap-4 w-full max-w-3xl mx-auto p-4">
				<h2 className="text-2xl text-[#292929] font-bold">
					Deja un comentario
				</h2>
				<div className="flex flex-col gap-2 p-2">
					<label htmlFor="nombre" className="font-bold">
						Nombre
					</label>
					<input
						type="text"
						name="nombre"
						id="nombre"
						className="py-1 px-2 outline-none rounded ring-1 ring-gray-400 focus:ring-2 focus:ring-blue-700"
					/>
				</div>
				<div className="flex flex-col gap-2 p-2">
					<label htmlFor="text" className="font-bold">
						Mensaje
					</label>
					<textarea
						name="text"
						id="text"
						className="rounded ring-1 ring-gray-400 resize-none h-20 outline-none p-2 focus:ring-2 focus:ring-blue-700"
					></textarea>
				</div>
				<div className="flex flex-col gap-2 p-2">
					<label htmlFor="text" className="font-bold">
						Calificación
					</label>
					<div className="flex gap-6 items-center">
						{Raiting.map((r) => (
							<div key={r.id} className="flex items-center gap-2">
								<label>{r.label}</label>
								<input type="radio" name="rating" id="rating" value={r.value} />
							</div>
						))}
					</div>
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
