import { useContext } from "react";
import CartContext from "../context/CartContext";

function useCart() {
	const cartContext = useContext(CartContext);

	if (!cartContext) {
		throw new Error("useContext debe ser usado adentro de CartProvider");
	}
	const { state, dispatch } = cartContext;
	return {
		state,
		dispatch,
	};
}

export default useCart;
