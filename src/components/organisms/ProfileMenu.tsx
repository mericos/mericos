import { Flex} from "@chakra-ui/react";
import { CardProfile } from "../molecules/CardProfile";

export function ProfileMenu() {
	return (
		<>
			<Flex w={"full"} gap={2} flexDir={"column"}>
				<CardProfile
					
					card_heading={"Card heading"}
				/>
				<CardProfile card_heading={"Card heading"} />
				<CardProfile card_heading={"Card heading"} />
				<CardProfile card_heading={"Card heading"} />
			</Flex>
		</>
	);
}
