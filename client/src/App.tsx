import { Route, Routes, BrowserRouter } from "react-router-dom";
import IndexLayout from "./components/layout/IndexLayout";
import Home from "./views/Home";
import Product from "./views/Product";
import Shop from "./views/Shop";
import CartProvider from "./context/CartProvider";
import CheckOut from "./views/CheckOut";
import NotFound from "./views/NotFound";

function App() {
	return (
		<>
			<CartProvider>
				<BrowserRouter>
					<Routes>
						<Route element={<IndexLayout />} path="/">
							<Route index element={<Home />} />
							<Route path="shop" element={<Shop />} />
							<Route path="shop/checkout" element={<CheckOut />} />
							<Route path="product/:id" element={<Product />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</CartProvider>
		</>
	);
}

export default App;
