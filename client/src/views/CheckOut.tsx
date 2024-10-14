import { Link } from "react-router-dom";
export default function CheckOut() {
	return (
		<>
			<div className="flex flex-col gap-5">
				<img
					src="/img/success.png"
					alt="img-checkout"
					className="w-11/12 max-w-[320px] mx-auto"
				/>
				<div className="text-center flex flex-col items-center gap-4 md:p-8">
					<h1 className="text-3xl font-bold">Gracias por comprar</h1>
					<p className="text-font">
						Su pedido se realizó correctamente y ahora se está procesando.
					</p>
					<Link
						to={"/"}
						className="flex items-center py-2 px-3 bg-neutral-800 text-white rounded hover:bg-neutral-900 transition-all ease-in-out duration-200"
					>
						Regresar al inicio
					</Link>
				</div>
			</div>
		</>
	);
}
