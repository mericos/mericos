import { Flex, IconButton, Input } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

export function SearchBar() {
	return (
		<Flex
			borderRadius={"lg"}
			p={"1"}
			backgroundColor={"light_surface.normal"}
			alignItems={"center"}
			gap={"0.25rem"}
		>
			<IconButton
				_hover={{ backgroundColor: "transparent" }}
				bgColor={"transparent"}
				icon={<BsFilter size={24} />}
				aria-label={"Filter"}
			/>
			{/* <Icon icon={<BsFilter size={24} />} /> */}
			<Input
				border={"0"}
				focusBorderColor="white"
				placeholder="Search"
				_focus={{ backgroundColor: "white" }}
			/>
			<IconButton
				icon={<AiOutlineSearch size={24} />}
				_hover={{ backgroundColor: "transparent" }}
				bgColor={"transparent"}
				aria-label={"Search-icon"}
			/>
		</Flex>
	);
}
