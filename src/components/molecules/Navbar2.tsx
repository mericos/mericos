import { Box, Flex } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Icon } from "../atoms/Icon";

export function Navbar2() {
	return (
		<>
			<Flex color={"gray.500"} pt={"2"} alignItems={"center"} justifyContent={"space-between"}>
				<Icon icon={<AiOutlineShoppingCart size={30} />}/>
				<Icon icon={<AiOutlineMenu size={30} />}/>
			</Flex>
		</>
	);
}
