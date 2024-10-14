import type { Product } from "../types";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useCart from "../hooks/useCart";

type PropCart = {
	item: Product;
};

export default function CartItem({ item }: PropCart) {
	const { dispatch } = useCart();
	const { nombre, quantity, precio, imagen, id } = item;
	return (
		<div className="grid grid-cols-[1fr,3fr] gap-4 max-w-[320px] bg-white rounded p-4 pl-2 border-b-2 last-of-type:border-b-0">
			<img
				src={`/img/${imagen}-${id}.webp`}
				alt={`${nombre.toLocaleLowerCase()}-img`}
				className="max-w-12"
			/>
			<div className="flex flex-col gap-4">
				<div className="flex gap-6 items-center justify-between">
					<h2 className=" text-[1.04rem] text-[#969696]">{nombre}</h2>
					<button
						className="p-1 rounded-s-full hover:bg-red-600 hover:text-white text-gray-500"
						onClick={() => dispatch({ type: "delete-one", payload: { id } })}
					>
						<XMarkIcon className="w-5 h-5 " />
					</button>
				</div>
				<div className="text-sm flex justify-between">
					<p>
						Unidad <span>{quantity}</span>
					</p>
					<span className="font-medium text-black">S/ {precio}</span>
				</div>
			</div>
		</div>
	);
}
