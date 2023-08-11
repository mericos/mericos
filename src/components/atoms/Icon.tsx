import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IconProps {
	icon: ReactNode;
}

export function Icon(props: IconProps) {
	return (
		<Box
			p={"1"}
			rounded={"md"}
			boxShadow={"dark-lg"}
			_hover={{
				bgColor: "gray.300",
				cursor: "pointer",
			}}
		>
			{props.icon}
		</Box>
	);
}
