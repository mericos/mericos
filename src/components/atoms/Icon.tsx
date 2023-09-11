import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IconProps {
	icon: ReactNode;
}

export function Icon(props: IconProps) {
	return (
		<Flex
			p={"1"}
			rounded={"md"}
			justifyContent={"center"}
			// boxShadow={"dark-lg"}
			_hover={{
				// bgColor: "gray.300",
				cursor: "pointer",
			}}
		>
			{props.icon}
		</Flex>
	);
}
