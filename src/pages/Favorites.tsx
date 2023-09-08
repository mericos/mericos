import { Flex } from "@chakra-ui/react";
import { LoggedNavbar } from "../components/molecules/LoggedNavbar";
import { FavoritesMenu } from "../components/organisms/FavoritesMenu";

export function Favorites() {
    return (
        <Flex flexDir={"column"} gap={2}>
            <LoggedNavbar page_title="Favorites"/>
            <FavoritesMenu/>
        </Flex>
    )
}