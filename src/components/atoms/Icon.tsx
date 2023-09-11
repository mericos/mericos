import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IconProps {
	icon: ReactNode;
	color?: string;
}

export function Icon({icon, color="pink.50"}: IconProps) {
	return (
		<Flex
			p={"1"}
			rounded={"md"}
			justifyContent={"center"}
			// boxShadow={"dark-lg"}
			_hover={{
				backgroundColor: "white",
				cursor: "pointer",
			}}
			_active={{
				backgroundColor: color,
			}}
		>
			{icon}
		</Flex>
	);
}
