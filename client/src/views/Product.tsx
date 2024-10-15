import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart.ts";
import { StarIcon } from "@heroicons/react/24/outline";
import { clientAxios } from "../helpers/AxiosClient.ts";
import type { Product } from "../types/index.ts";
import useComent from "../hooks/useComent.ts";
import Coment from "../components/Comment.tsx";
import Form from "../components/Form.tsx";
import placeH from "/placeholder.png";

export default function Product() {
	const [load, setLoad] = useState(true);
	const { coment, setComent, addComment } = useComent();
	const { dispatch } = useCart();
	const initialState = {
		id: 0,
		nombre: "",
		precio: 0,
		descripcion: "",
		imagen: "",
		comentarios: [],
		quantity: 1,
	};

	const [producto, setProduct] = useState<Product>(initialState);
	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		setComent(producto.comentarios);
	}, [producto]);

	useEffect(() => {
		async function readProduct() {
			try {
				const result = await clientAxios(`shop/product/${id}`);
				setProduct(result.data);
			} catch (e) {
				navigate("/");
			} finally {
				setLoad(true);
			}
		}
		readProduct();
	}, []);

	const isEmpty = coment.length <= 0;
	return (
		<>
			{!load ? (
				<span className="loader w-5 h-5 block mt-10"></span>
			) : (
				<>
					<section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
						<div className="flex items-center justify-center">
							<img
								className="w-full max-w-[350px] aspect-auto"
								src={
									producto.imagen
										? `/img/${producto.imagen}-${producto.id}.webp`
										: placeH
								}
								alt={`${producto.nombre.toLocaleLowerCase()}`}
							/>
						</div>
						<div className="flex flex-col gap-8 p-4">
							<h1 className="text-4xl text-primary-color font-bold">
								{producto.nombre}
							</h1>
							<div className="flex items-center gap-6 ">
								<div className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-1">
									<StarIcon className="text-yellow-400 w-6 h-6"></StarIcon>
									<span className="text-sm text-gray-600">4.2-54 reviews</span>
								</div>
								<div className="rounded-md px-2 py-1 font-semibold text-white bg-green-500">
									En stock
								</div>
							</div>
							<p className="font-bold text-lg">S/ {producto.precio}</p>
							<div className="text-gray-400 flex flex-col gap-2">
								<p>{producto.descripcion}</p>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Minima ut corporis accusantium modi exercitationem nostrum
									earum dicta molestias quo, soluta tenetur, aspernatur vitae
									sunt, voluptate error quas eligendi laboriosam consequuntur.
								</p>
							</div>
							<button
								className="block bg-primary-color text-white font-bold rounded p-2 hover:bg-secondary-color transition-all ease-in-out"
								onClick={() =>
									dispatch({ type: "set-cart", payload: { cart: producto } })
								}
							>
								Add to cart
							</button>
						</div>
					</section>
					<section className="flex max-w-4xl mx-auto flex-col gap-10">
						<h2 className="text-3xl font-bold text-neutral-900 text-center lg:text-left mt-10">
							Comentarios
						</h2>
						{isEmpty ? (
							<p className="text-xl text-gray-400">No hay ningun comentario</p>
						) : (
							coment.map((p, i) => <Coment key={i} item={p} />)
						)}
						<Form id={producto.id} addComment={addComment} />
					</section>
				</>
			)}
		</>
	);
}
