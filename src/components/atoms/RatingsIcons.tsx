import { StarIcon } from "@chakra-ui/icons";
import { useState } from "react";

export function RatingsIcons() {
	const [isStarClicked, setIsStarClicked] = useState(false);
	const handleStarClick = () => {
		setIsStarClicked(!isStarClicked);
	};
	return (
		<>
			<StarIcon
				onClick={handleStarClick}
				color={isStarClicked ? "customColors.primary.500" : "gray.200"}
				boxSize={6}
			/>
		</>
	);
}
