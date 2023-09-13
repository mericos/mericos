import { Flex } from "@chakra-ui/react";

import { CardCart } from "../molecules/CardCart";

export function CartMenu() {
	return (
		<>
			<Flex flexWrap={"wrap"} gap={2}>
				<CardCart card_heading={"Header"} card_caption={"Subhead"} />
			</Flex>
		</>
	);
}
