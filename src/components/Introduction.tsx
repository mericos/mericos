import { Box, Flex, Heading, Img, Text } from "@chakra-ui/react";
import food1 from "../assets/food1.png";
import { ButtonM } from "./atoms/ButtonM";
import { CheckboxM } from "./atoms/CheckboxM";

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
					<ButtonM text="Button"></ButtonM>
					<CheckboxM></CheckboxM>
				</Flex>
			</Box>
		</>
	);
}