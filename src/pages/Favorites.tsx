import { Flex } from "@chakra-ui/react";
import { LoggedNavbar } from "../components/molecules/LoggedNavbar";
import { FavoritesMenu } from "../components/organisms/FavoritesMenu";

export function Favorites() {
    return (
		<Flex flexDir={"column"} maxW={"6xl"} paddingX={"1rem"} w={"full"} >
			<LoggedNavbar page_title="Favorites" />
			<FavoritesMenu />
		</Flex>
	);
}