import { Flex } from "@chakra-ui/react";
import { CardProfile } from "../molecules/CardProfile";

export function ProfileMenu() {
	const CARD_TTILES = ["My account", "Billing/Payment", "My locations"];
	return (
		<>
			<Flex w={"full"} gap={2} flexDir={"column"}>
				{CARD_TTILES.map((title) => (
					<CardProfile key={title} card_heading={title} />
				))}

				
			</Flex>
		</>
	);
}
