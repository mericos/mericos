import { Flex, Text } from "@chakra-ui/react";

export function CartInfoContainer() {
	return (
		<>
			<Flex
				bgColor={"secondary.normal"}
				padding={"0.625rem 1.25rem"}
				justifyContent={"space-between"}
				width={"25.75rem"}
				color={"white"}
			>
				<Text>Items | 0 Mzn</Text>
				<Text>Ver carrinho</Text>
			</Flex>
		</>
	);
}
