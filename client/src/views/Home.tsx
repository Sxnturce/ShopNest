import { useState, useEffect } from "react";
import type { Product } from "../types";
import { clientAxios } from "../helpers/AxiosClient";
import Card from "../components/Card";

export default function Home() {
	const [products, setProducts] = useState<Product[]>([]);
	const [load, setLoad] = useState(false);

	useEffect(() => {
		async function readData() {
			try {
				const result = await clientAxios("shop");
				setProducts(result.data);
			} catch (e) {
				console.log(e);
			} finally {
				setLoad(true);
			}
		}
		readData();
	}, []);
	return (
		<>
			{!load ? (
				<span className="loader w-5 h-5 block mt-10"></span>
			) : (
				<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
					{products.map((product) => (
						<Card key={product.id} item={product} />
					))}
				</section>
			)}
		</>
	);
}
