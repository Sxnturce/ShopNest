import Pedido from "../components/Pedido";
import PayCard from "../components/PayCard";

export default function Shop() {
	return (
		<>
			<section className="grid lg:grid-cols-[2fr,1fr] lg:gap-8 gap-10 grid-cols-1">
				<div>
					<h1 className="font-bold text-xl mb-4">Tu carrito</h1>
					<hr className="w-full mb-8" />
					<div className="flex flex-col gap-12">
						<PayCard />
						<PayCard />
						<PayCard />
						<PayCard />
					</div>
				</div>
				<Pedido />
			</section>
		</>
	);
}
