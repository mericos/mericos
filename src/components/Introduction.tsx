import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "./molecules/Navbar";


import { CardM } from "./molecules/CardM";

export function Introduction() {
	const size: "phone" | "laptop" | "universal" = useBreakpointValue(
		{
		base: 'phone',
		sm: 'laptop',
		xl: "universal"
		},
		{
		// Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
		// (Defaults to 'base')
		fallback: 'md',
		},
	) ?? "phone"
	return (
		<Flex direction={"column"} width="full" align="center">
			<Navbar type={"primary"} size={size} navigationState={"authenticated"} />

			<CardM 
			name="name"
			type="producer"
			image_shape="circle"
			image="https://www.researchgate.net/profile/Bosheng-Song/publication/311221368/figure/fig1/AS:444086353174528@1482889845254/A-chess-board-pattern.png"
			/>


	
		</Flex>
	);
}
