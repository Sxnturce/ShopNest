import useCart from "../hooks/useCart";
import CartItem from "./CartItem";
import { useMemo } from "react";

export default function Cart() {
	const { state, dispatch } = useCart();
	const isEmpty = useMemo(() => state.cart.length === 0, [state.cart]);

	return (
		<>
			<section className="absolute right-10 z-10 top-[110%] bg-white rounded p-4 shadow-md flex flex-col gap-4 items-center max-h-[450px]">
				<h1 className="text-center text-2xl text-primary-color font-black">
					Carrito de compras
				</h1>
				<section className="overflow-y-auto cart">
					{isEmpty ? (
						<p>Tu carrito esta vacio</p>
					) : (
						state.cart.map((s) => <CartItem item={s} key={s.id} />)
					)}
				</section>
				<button
					className="bg-primary-color w-full text-white font-bold py-1 px-2 rounded hover:bg-secondary-color transition-all ease-in-out disabled:bg-primary-color/40 disabled:cursor-not-allowed"
					disabled={isEmpty}
					onClick={() => dispatch({ type: "place-cart" })}
				>
					Vaciar Carrito
				</button>
			</section>
		</>
	);
}
