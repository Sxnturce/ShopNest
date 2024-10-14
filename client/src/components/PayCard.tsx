import useCart from "../hooks/useCart";
import { Product } from "../types";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Formater from "../helpers/Decimal";

type PayProp = {
	item: Product;
};

export default function PayCard({ item }: PayProp) {
	const { dispatch } = useCart();
	const { id, nombre, precio, imagen, quantity } = item;

	return (
		<>
			<section className="flex flex-col sm:flex-row gap-4 items-center justify-between text-sm flex-1">
				<img
					src={`/img/${imagen}-${id}.webp`}
					className="w-full max-w-[200px] sm:max-w-[40px] object-contain aspect-[1/1.5] grow basis-0"
					alt={`${nombre.toLocaleLowerCase()}-img`}
				/>
				<div className="flex flex-row sm:flex-col gap-1 grow basis-0">
					<h2 className="font-semibold">{nombre}</h2>
				</div>
				<p className="font-semibold grow basis-0">
					{Formater(precio * quantity)}
				</p>
				<div className="flex flex-row items-center justify-between gap-6 sm:gap-8 grow basis-0">
					<div className="flex text-[1rem] font-semibold text-fontProduct grow basis-0 ">
						<button
							className="flex cursor-pointer select-none items-center justify-center rounded-l rounded-bl rounded-tl border-[1px] border-[#E6E7E8] px-4 py-1 text-xl transition-all duration-200 ease-in-out hover:border-secondary-color hover:bg-secondary-color hover:text-white"
							onClick={() =>
								dispatch({ type: "decrease-cart", payload: { id } })
							}
						>
							-
						</button>
						<span className="border-b-[1px] border-t-[1px] border-[#E6E7E8]  px-4 py-1 text-lg ">
							{quantity}
						</span>
						<button
							className="flex cursor-pointer select-none items-center justify-center rounded-r rounded-br rounded-tr border-[1px] border-[#E6E7E8] px-4 py-1 text-xl transition-all duration-200 ease-in-out hover:border-secondary-color hover:bg-secondary-color hover:text-white"
							onClick={() => {
								dispatch({ type: "increase-cart", payload: { id } });
							}}
						>
							+
						</button>
					</div>
					<button
						className="p-2 grow basis-0"
						onClick={() => dispatch({ type: "delete-one", payload: { id } })}
					>
						<div className="hover:bg-red-600 hover:text-white rounded-full max-w-max text-black p-1">
							<XMarkIcon className="h-5 w-5" />
						</div>
					</button>
				</div>
			</section>
		</>
	);
}
