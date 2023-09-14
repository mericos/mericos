import { Flex } from "@chakra-ui/react";
import { CardFavorite } from "../molecules/CardFavorite";


export function FavoritesMenu() {
	return (
			<Flex
				flexWrap={"wrap"}
				gap={2}
			>
				<CardFavorite
					heading={"Card heading"}
					caption={"Card caption"}
					liked={false}
				/>
			</Flex>
	);
}
