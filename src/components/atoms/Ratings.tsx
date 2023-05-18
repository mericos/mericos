import { StarIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
interface RatingProps {
	rating?: number,
	isEditable?: boolean
}

export function RatingsIcons( { rating = 5, isEditable = false}: RatingProps) {
	const [ratingValue, setRatingValue] = useState(rating);

	const handleStarClick = (selectedRating: number) => {
		selectedRating === ratingValue ? setRatingValue(0) : setRatingValue(selectedRating);
	};

	const arr = [1, 2, 3, 4, 5];

	return (
		<Box>
			{arr.map((star) => (
				<StarIcon
					key={star}
					onClick={() => isEditable ? handleStarClick(star) : null}
					color={star <= ratingValue ? "primary.500" : "gray.200"}
					boxSize={6}
				/>
			))}
		</Box>
	);
}
