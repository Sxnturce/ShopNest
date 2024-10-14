import Pedido from "../components/Pedido";
import PayCard from "../components/PayCard";
import useCart from "../hooks/useCart";

export default function Shop() {
	const { state } = useCart();
	const isEmpty = state.cart.length <= 0;
	return (
		<>
			<section className="grid lg:grid-cols-[2fr,1fr] lg:gap-8 gap-10 grid-cols-1">
				<div>
					<h1 className="font-bold text-xl mb-4">Tu carrito</h1>
					<hr className="w-full mb-8" />
					<div className="flex flex-col gap-12">
						{isEmpty ? (
							<p className="text-lg text-gray-500">Tu carrito esta vacio</p>
						) : (
							state.cart.map((s) => <PayCard key={s.id} item={s} />)
						)}
					</div>
				</div>
				<Pedido />
			</section>
		</>
	);
}
