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
				<Flex
					gap={["1", "3", "3"]}
					flexDirection={["column", "row", "row"]}
				>
					<Heading color={"primary.500"} >Delicious food </Heading>
					<Heading> for you</Heading>
				</Flex>

				<SearchBar/>
				<ProductsMenu />
			</Flex>
		</Flex>
	);
}
