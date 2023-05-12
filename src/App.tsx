import { ChakraProvider, Flex } from "@chakra-ui/react";
import { customTheme } from "./style/customTheme";

export function App() {
	return (
		<>
			<ChakraProvider theme={customTheme}>
				<Flex fontFamily={"Roboto"} justifyContent="center">
				</Flex>
			</ChakraProvider>
		</>
	);
}
