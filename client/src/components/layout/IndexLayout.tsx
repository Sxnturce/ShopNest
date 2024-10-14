import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function () {
	return (
		<>
			<Header />
			<main className="w-11/12 max-w-7xl mx-auto mt-28">{<Outlet />}</main>
		</>
	);
}
