import type { Comment } from "../types";
import Star from "./partialComment/Star";
import DateF from "../helpers/DateF.ts";

type CommentProp = {
	item: Comment;
};
export default function Coment({ item }: CommentProp) {
	const { nombre, text, fecha, rating } = item;
	return (
		<>
			<div className="w-full flex flex-col gap-4 bg-white py-4 px-8 rounded shadow">
				<div className="flex items-center justify-between">
					<h2 className="font-bold text-lg">{nombre}</h2>
					<Star raiting={rating} />
				</div>
				<div className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr),1fr] gap-4">
					<p className="text-[0.98rem] text-gray-500 break-words">{text}</p>
					<span className="text-right">{DateF(fecha)}</span>
				</div>
			</div>
		</>
	);
}
