import { Link } from "react-router-dom";
export default function NotFound() {
	return (
		<>
			<section className="w-full grid grid-cols-1  lg:grid-cols-2  h-dvh  place-items-center gap-2">
				<div className="flex flex-col gap-8 lg:items-start items-center">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl sm:text-5xl text-center md:text-6xl lg:text-left text-primary-color font-black">
							Not Found - 404
						</h1>
						<p className="text-gray-500 text-[0.95rem] md:text-lg text-center lg:text-left">
							La pagina que solicitaste no esta disponible o no existe.
						</p>
					</div>
					<Link
						className="bg-primary-color text-white py-2  px-4 font-bold rounded text-[0.95rem] md:text-lg max-w-max transition-all ease-in-out hover:bg-secondary-color"
						to="/"
					>
						Regresar al inicio
					</Link>
				</div>
				<img
					src="/img/404-img.webp"
					alt="404 - not found"
					className="image-404 w-full max-w-[500px]"
				/>
			</section>
		</>
	);
}
