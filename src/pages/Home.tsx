import {
	Flex,
	Heading,
} from "@chakra-ui/react";

import { LoggedNavbar } from "../components/molecules/LoggedNavbar";
import { ProductsMenu } from "../components/organisms/ProductsMenu";
import "../index.css"
import { SearchBar } from "../components/molecules/SeachBar";


export function Home() {
   
	return (
		<Flex flexDir={"column"} w={"full"} maxW={"6xl"} paddingX={"1rem"}>
			<LoggedNavbar />
			<Flex
				flexDirection={"column"}
				gap={4}
			>
				<SearchBar/>
				<ProductsMenu />
			</Flex>
		</Flex>
	);
}
