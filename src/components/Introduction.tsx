import { Box, Button, Flex, Heading, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ButtonM } from "./atoms/ButtonM";
import { MenuM } from "./molecules/MenuM";

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
					<MenuM/>
					{/* <Menu>
						<MenuButton as={Button}>
							Actions
						</MenuButton>
						<MenuList>
							<MenuItem>Download</MenuItem>
							<MenuItem>Create a Copy</MenuItem>
							<MenuItem>Mark as Draft</MenuItem>
							<MenuItem>Delete</MenuItem>
							<MenuItem>Attend a Workshop</MenuItem>
						</MenuList>
					</Menu> */}
				</Flex>
			</Box>
		</>
	);
}