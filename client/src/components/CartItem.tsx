export default function CartItem() {
	return (
		<div className="grid grid-cols-[1fr,3fr] gap-4 max-w-[320px] bg-white rounded p-4">
			<img src="/img/producto-1.webp" alt="producto-1" className="max-w-12" />
			<div className="flex flex-col gap-2">
				<h2 className=" text-[1.04rem] text-[#969696]">
					Microfono nombre grande
				</h2>
				<div className="text-sm flex justify-between text-gray-500">
					<p>
						Unidad <span>10</span>
					</p>
					<span className="font-medium text-black">S/ 5000</span>
				</div>
			</div>
		</div>
	);
}
