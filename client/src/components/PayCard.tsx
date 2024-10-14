import { XMarkIcon } from "@heroicons/react/24/solid";

export default function PayCard() {
	return (
		<>
			<section className="flex flex-col sm:flex-row gap-4 items-center justify-evenly text-sm flex-1">
				<img
					src="/img/producto-1.webp"
					className="w-full max-w-[200px] sm:max-w-[40px] object-contain aspect-[1/1.5]"
					alt="producto"
				/>
				<div className="flex flex-row sm:flex-col gap-1">
					<h2 className="font-semibold">Colchon dileto Queen</h2>
				</div>
				<p className="font-semibold">S/ 12.000</p>
				<div className="flex flex-row items-center gap-4 sm:gap-8">
					<div className="flex text-[1rem] font-semibold text-fontProduct ">
						<button className="flex cursor-pointer select-none items-center justify-center rounded-l rounded-bl rounded-tl border-[1px] border-[#E6E7E8] px-4 py-1 text-xl transition-all duration-200 ease-in-out hover:border-red-500 hover:bg-red-500 hover:text-white">
							-
						</button>
						<span className="border-b-[1px] border-t-[1px] border-[#E6E7E8]  px-4 py-1 text-lg ">
							0
						</span>
						<button className="flex cursor-pointer select-none items-center justify-center rounded-r rounded-br rounded-tr border-[1px] border-[#E6E7E8] px-4 py-1 text-xl transition-all duration-200 ease-in-out hover:border-green-600 hover:bg-green-600 hover:text-white">
							+
						</button>
					</div>
					<button className="p-2">
						<XMarkIcon className="text-black h-5 w-5" />
					</button>
				</div>
			</section>
		</>
	);
}
