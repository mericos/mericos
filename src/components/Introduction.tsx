import { Box, Flex, Heading, useBreakpointValue } from "@chakra-ui/react";
import { ButtonM } from "./atoms/ButtonM";
import { Dropdown } from "./molecules/Dropdown";
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
			<Box  maxWidth={"7xl"} padding={"2.5rem 1.25rem"}>
				<Heading size={"xl"} fontFamily={"Roboto"} color={"primary"}>
					Mericos {size}
				</Heading>
				<Flex gap={"1.25rem"}>
					{/* <Text>
						Mericos é uma empresa de entrega de comida dedicada a
						fornecer refeições saborosas e convenientes para os
						clientes.{" "}
					</Text>
					<Img src={food1} /> */}
					<ButtonM text="Button" />
					<Dropdown />
				</Flex>
			</Box>
		</Box>
	);
}
