import { Link } from "react-router-dom";
import { useMemo } from "react";
import { Product } from "../types";
import useCart from "../hooks/useCart.ts";

type CardProp = {
	item: Product;
};

export default function Card({ item }: CardProp) {
	const { id, nombre, precio, descripcion, imagen } = item;
	const { dispatch } = useCart();
	const lowerName = useMemo(() => nombre.toLocaleLowerCase(), [nombre]);

	return (
		<>
			<div className="bg-white rounded shadow flex flex-col">
				<picture className="w-full p-4 block bg-gray-50">
					<img
						className=" max-w-[190px] h-[190px] block object-cover mx-auto"
						src={`/img/${imagen}-${id}.webp`}
						alt={`img-${lowerName}`}
					/>
				</picture>
				<section className="flex flex-col gap-4 p-6 grow">
					<Link
						to={`/product/${id}`}
						className="hover:underline cursor-pointer"
					>
						<h2 className="font-bold text-xl">{nombre}</h2>
					</Link>
					<div className="grow">
						<p className="text-[#727272] text-sm">{descripcion}</p>
					</div>
					<div className="flex gap-2 items-center justify-between">
						<button
							className="bg-primary-color text-[0.95rem] font-medium text-white px-2 py-[0.3rem] rounded hover:bg-secondary-color transition-all ease-in-out"
							onClick={() =>
								dispatch({ type: "set-cart", payload: { cart: item } })
							}
						>
							Add to cart
						</button>
						<span className="font-bold">S/ {precio}</span>
					</div>
				</section>
			</div>
		</>
	);
}
