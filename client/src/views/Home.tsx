import { useState, useEffect } from "react";
import type { Product } from "../types";
import { clientAxios } from "../helpers/AxiosClient";
import Card from "../components/Card";

export default function Home() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function readData() {
			const result = await clientAxios("shop");
			setProducts(result.data);
		}
		readData();
	}, []);
	return (
		<>
			<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
				{products.map((product) => (
					<Card key={product.id} item={product} />
				))}
			</section>
		</>
	);
}
