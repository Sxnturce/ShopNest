import { useMemo } from "react";
import useCart from "../hooks/useCart";
import { Link } from "react-router-dom";
import Formater from "../helpers/Decimal.ts";

export default function Pedido() {
	const { state, dispatch } = useCart();

	const isEmpty = state.cart.length <= 0;
	const subTot = useMemo(
		() =>
			state.cart.reduce((prev, item) => prev + item.quantity * item.precio, 0),
		[state.cart]
	);
	const IGV = useMemo(() => subTot * 0.15, [state.cart]);
	const tot = subTot + IGV;

	return (
		<div className="flex flex-col gap-8 border-[1px] p-6">
			<h2 className="font-bold">Resumen del Pedido</h2>
			<div className="flex flex-col gap-2">
				<div className="flex justify-between items-center">
					<h3 className=" text-gray-500"> Subtotal:</h3>
					<span className="font-semibold">{Formater(subTot)}</span>
				</div>
				<div className="flex justify-between items-center">
					<h3 className=" text-gray-500"> Envio:</h3>
					<span className="font-semibold">Free</span>
				</div>
				<div className="flex justify-between items-center">
					<h3 className=" text-gray-500"> IGV (15%) :</h3>
					<span className="font-semibold">{Formater(IGV)}</span>
				</div>
			</div>
			<hr />
			<div className="flex justify-between items-center  font-semibold">
				<h3 className=" font-semibold text-black"> Total:</h3>
				<span className="font-semibold">{Formater(tot)}</span>
			</div>
			<button
				className={`${
					isEmpty ? "bg-neutral-800/40" : "hover:bg-black"
				}  block bg-neutral-800 text-white py-2 text-center rounded border-2 border-transparent transition-all ease-in-out duration-200`}
				disabled={isEmpty}
			>
				<Link
					to="/shop/checkout"
					className={`w-full block ${
						isEmpty ? "cursor-default" : "cursor-pointer"
					}`}
					onClick={() => dispatch({ type: "place-cart" })}
				>
					Pagar
				</Link>
			</button>
			<Link
				to={"/"}
				className="underline text-center hover:text-neutral-700 transition-all ease-in-out duration-200"
			>
				Continuar comprando
			</Link>
		</div>
	);
}
