import { ReactNode, useReducer } from "react";
import CartContext from "./CartContext";
import { CartReducer, initialState } from "../reducers/cart-reducer";

export default function CartProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(CartReducer, initialState);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}
