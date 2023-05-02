import { Box, Flex, Heading } from "@chakra-ui/react";
import { ButtonM } from "./atoms/ButtonM";
import { Dropdown } from "./molecules/Dropdown";

export function Introduction() {
	return (
		<>
			<Box padding={"2.5rem 1.25rem"}>
				<Heading size={"xl"} fontFamily={"Roboto"} color={"primary"}>
					Mericos
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
		</>
	);
}
