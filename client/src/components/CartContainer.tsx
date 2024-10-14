import CartItem from "./CartItem";

export default function Cart() {
	return (
		<>
			<section className="cart absolute right-10 top-[105%] bg-slate-100 rounded p-4 shadow flex flex-col gap-4 items-center max-h-[450px] overflow-y-auto">
				<h1 className="text-center text-2xl text-primary-color font-black">
					Carrito de compras
				</h1>
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<CartItem />
				<button className="bg-primary-color w-full text-white font-bold py-1 px-2 rounded hover:bg-secondary-color transition-all ease-in-out">
					Vaciar Carrito
				</button>
			</section>
		</>
	);
}
