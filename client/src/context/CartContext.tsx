import { createContext, Dispatch } from "react";
import { cartActions, StateProps } from "../reducers/cart-reducer.ts";

const CartContext = createContext<
	| {
			state: StateProps;
			dispatch: Dispatch<cartActions>;
	  }
	| undefined
>(undefined);

export default CartContext;
