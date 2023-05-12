import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

export function RatingsIcons() {
	const [rating, setRating] = useState(0);

	const handleStarClick = (selectedRating: number) => {
		selectedRating === rating ? setRating(0) : setRating(selectedRating);
	};

	return (
		<>
			{[1, 2, 3, 4, 5].map((star) => (
				<StarIcon
					key={star}
					onClick={() => handleStarClick(star)}
					color={star <= rating ? "primary.500" : "gray.200"}
					boxSize={6}
				/>
			))}
		</>
	);
}
