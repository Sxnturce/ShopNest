import { Route, Routes, BrowserRouter } from "react-router-dom";
import IndexLayout from "./components/layout/IndexLayout";
import Home from "./views/Home";
import Product from "./views/Product";
import Shop from "./views/Shop";
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<IndexLayout />} path="/">
						<Route index element={<Home />} />
						<Route path="shop" element={<Shop />} />
						<Route path="product/:id" element={<Product />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
