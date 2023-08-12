import { Flex, Grid, Text } from "@chakra-ui/react";
import { products_types } from "../../utils/productTypes";
import { CardM2 } from "../molecules/CardM2";

export function ProductsMenu() {
    return (
		<>
			<Flex justifyContent={"left"} gap={"1.5rem"} p="2">
                {products_types.map((type) => (
                 
					<Text fontWeight={"bold"} textColor={"gray.500"} key={type}>
						{type}
					</Text>
				))}
			</Flex>
			<Grid
				gap={2}
				templateColumns={[
					"repeat(2, 1fr)",
					"repeat(3, 1fr)",
					"repeat(5, 1fr)",
				]}
			>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
				<CardM2
					card_heading={"Card heading"}
					card_caption={"Card caption"}
				/>
			</Grid>
		</>
	);
}