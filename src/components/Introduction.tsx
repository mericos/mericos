import { Box, useBreakpointValue } from "@chakra-ui/react";
import { Navbar } from "./Navbar";

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
			<Navbar type={"primary"} size={size} navigationState={"authenticated"} />
		</Box>
	);
}
