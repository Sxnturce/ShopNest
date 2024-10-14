import { Link } from "react-router-dom";

export default function Pedido() {
	return (
		<div className="flex flex-col gap-8 border-[1px] p-6">
			<h2 className="font-bold">Resumen del Pedido</h2>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<h3 className=" text-gray-500"> Subtotal:</h3>
					<span className="font-semibold">S/ 4,038</span>
				</div>
				<div className="flex justify-between items-center">
					<h3 className=" text-gray-500"> Envio:</h3>
					<span className="font-semibold">Free</span>
				</div>
				<div className="flex justify-between items-center">
					<h3 className=" text-gray-500"> IGV (15%) :</h3>
					<span className="font-semibold">S/ 726.84</span>
				</div>
			</div>
			<hr />
			<div className="flex justify-between items-center  font-semibold">
				<h3 className=" font-semibold text-black"> Total:</h3>
				<span className="font-semibold">S/ 4,764.60</span>
			</div>
			<Link
				to="/cart/checkout"
				className="w-full bg-neutral-800 text-white py-2 text-center rounded border-2 border-transparent hover:bg-white hover:border-2 hover:border-gray-400 hover:text-black transition-all ease-in-out duration-200"
			>
				Pagar
			</Link>
			<Link
				to={"/"}
				className="underline text-center hover:text-neutral-700 transition-all ease-in-out duration-200"
			>
				Continuar comprando
			</Link>
		</div>
	);
}
