import { useState } from "react";
import { useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Cart from "./CartContainer";
import logo from "/logo-ecomerce.webp";
import useCart from "../hooks/useCart";

export default function Header() {
	const { state } = useCart();
	const cartQuantity = useMemo(() => state.cart.length, [state.cart]);

	const [active, setActive] = useState(false);
	return (
		<>
			<header className="w-full p-4 shadow-md fixed top-0 bg-white">
				<nav className="w-11/12 max-w-[1400px] flex justify-between mx-auto items-end">
					<div className="flex items-center justify-between gap-6">
						<Link to={"/"}>
							<img className="w-full max-w-28" src={logo} alt="img-logo" />
						</Link>
						<nav className="flex gap-4 mt-3">
							<NavLink to={"/"} className={"text-gray-600 hover:text-black"}>
								Inicio
							</NavLink>
							<NavLink
								to={"/shop"}
								className={"text-gray-600 hover:text-black"}
							>
								comprar
							</NavLink>
						</nav>
					</div>
					<div className="relative" onClick={() => setActive(!active)}>
						<ShoppingCartIcon className="text-primary-color w-8 h-8 cursor-pointer" />
						<span className="absolute -top-1 -right-1 select-none bg-secondary-color text-white rounded-full h-[1.1rem] w-[1.1rem] font-medium flex items-center justify-center">
							{cartQuantity}
						</span>
					</div>
					{active && <Cart />}
				</nav>
			</header>
		</>
	);
}
