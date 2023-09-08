import { Grid } from "@chakra-ui/react";
import { CardFavorite } from "../molecules/CardFavorite";

export function FavoritesMenu() {
	return (
		<>
			<Grid
				gap={2}
				templateColumns={[
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
					"repeat(5, 1fr)",
				]}
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
			</Grid>
		</>
	);
}
