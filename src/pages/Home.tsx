import {
	Flex,
	Heading,
	Input,
} from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

import { LoggedNavbar } from "../components/molecules/LoggedNavbar";
import { Icon } from "../components/atoms/Icon";
import { AiOutlineSearch } from "react-icons/ai";
import { ProductsMenu } from "../components/organisms/ProductsMenu";

export function Home() {
   
	return (
		<Flex
			flexDirection={"column"}
			maxWidth={"7xl"}
			m={"1.25rem"}
			gap={4}
		>
			<LoggedNavbar />
			<Flex
				gap={["1", "3", "3"]}
				flexDirection={["column", "row", "row"]}
			>
				<Heading>Delicious food </Heading>
				<Heading> for you</Heading>
			</Flex>

			<Flex borderRadius={"lg"} p={"1"} backgroundColor={"pink.50"} alignItems={"center"}>
				<Icon icon={<BsFilter size={24} />} />
				<Input
					border={"0"}
					focusBorderColor="white"
					placeholder="Search"
				/>
				<Icon icon={<AiOutlineSearch size={24} />} />
			</Flex>
			<ProductsMenu />
			
		</Flex>
	);
}
