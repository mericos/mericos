import { Box, Flex } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { Icon } from "../atoms/Icon";

export function Navbar2() {
	return (
		<>
			<Flex alignItems={"center"}>
				<Icon icon={<AiOutlineMenu size={35} />}/>
				<Icon icon={<AiOutlineShoppingCart size={35} />}/>
			</Flex>
		</>
	);
}
