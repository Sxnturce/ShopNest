import { StarIcon } from "@heroicons/react/24/solid";

type StarProps = {
	raiting: number;
};

export default function Star({ raiting }: StarProps) {
	return (
		<>
			<div className="flex gap-2">
				{[...Array(5)].map((_, i) => (
					<StarIcon
						key={i}
						className={`${
							i < raiting ? "text-yellow-600" : "text-gray-300"
						} w-3  h-3`}
					/>
				))}
			</div>
		</>
	);
}
