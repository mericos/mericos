import { Flex } from "@chakra-ui/react";
import { CardFavorite } from "../molecules/CardFavorite";

export function FavoritesMenu() {
	return (
		<>
			<Flex
				flexWrap={"wrap"}
				gap={2}
			>
				<CardFavorite
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardFavorite
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardFavorite
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardFavorite
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardFavorite
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardFavorite
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
			</Flex>
		</>
	);
}
