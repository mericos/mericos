import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { ButtonM } from "./atoms/ButtonM";
import { Dropdown } from "./molecules/Dropdown";
import { Navbar } from "./Navbar";
import { DrawerOverlay } from "./molecules/HamburguerMenu";

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
		<Box width="full" align="center" >
			<Navbar type={"secondary"} size={size} navigationState={"authenticated"} />
		</Box>
	);
}
