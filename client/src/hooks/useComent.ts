import { Comment } from "../types";
import { useState } from "react";

const useComent = () => {
	const [coment, setComent] = useState<Comment[]>([]);

	function addComment(item: Comment) {
		setComent([...coment, item]);
	}

	return {
		coment,
		setComent,
		addComment,
	};
};
export default useComent;
