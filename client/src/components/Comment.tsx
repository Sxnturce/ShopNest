import type { Comment } from "../types";
import Star from "./partialComment/Star";

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
				<div className="flex items-center justify-between">
					<p className="text-[0.98rem] text-gray-500">{text}</p>
					<span>{fecha}</span>
				</div>
			</div>
		</>
	);
}
