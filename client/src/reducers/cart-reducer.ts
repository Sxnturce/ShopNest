import type { Product } from "../types";

const MAX_NUM = 10;
const MIN_NUM = 1;

function saveData() {
	let saved: Product[] = [];
	const query = localStorage.getItem("shop-cart");
	if (query) {
		saved = JSON.parse(query);
	}
	return saved;
}

export type cartActions =
	| { type: "set-cart"; payload: { cart: Product } }
	| { type: "increase-cart"; payload: { id: Product["id"] } }
	| { type: "decrease-cart"; payload: { id: Product["id"] } }
	| { type: "delete-one"; payload: { id: Product["id"] } }
	| { type: "place-cart" };

export type StateProps = {
	cart: Product[];
};

export const initialState: StateProps = {
	cart: saveData(),
};

export const CartReducer = (
	state: StateProps = initialState,
	actions: cartActions
) => {
	if (actions.type === "set-cart") {
		const payload = actions.payload.cart;
		const states = state.cart;

		let newCart: Product[] = [];
		const exist = states.find((f) => payload.id === f.id);

		if (!exist) {
			if (states.length < 5) {
				newCart = [...states, { ...payload, quantity: 1 }];
			} else {
				newCart = [...states];
			}
		} else {
			const mapObj = { ...exist, quantity: exist.quantity + 1 };
			newCart = states.map((s) =>
				s.id === exist.id && s.quantity < MAX_NUM ? mapObj : s
			);
		}

		return {
			...state,
			cart: newCart,
		};
	}
	if (actions.type === "increase-cart") {
		const payload = actions.payload.id;
		const states = state.cart;

		const finded: Product = states.filter((f) => payload === f.id)[0];

		const obj = { ...finded, quantity: finded.quantity + 1 };
		const maped = states.map((s) =>
			s.id === finded.id && s.quantity < MAX_NUM ? obj : s
		);
		return {
			...state,
			cart: maped,
		};
	}
	if (actions.type === "decrease-cart") {
		const payload = actions.payload.id;
		const states = state.cart;

		const finded: Product = states.filter((f) => payload === f.id)[0];

		const obj = { ...finded, quantity: finded.quantity - 1 };
		const maped = states.map((s) =>
			s.id === finded.id && s.quantity > MIN_NUM ? obj : s
		);
		return {
			...state,
			cart: maped,
		};
	}
	if (actions.type === "delete-one") {
		const deleted = state.cart.filter((s) => s.id !== actions.payload.id);
		return {
			...state,
			cart: deleted,
		};
	}
	if (actions.type === "place-cart") {
		return {
			cart: [],
		};
	}
	return state;
};
