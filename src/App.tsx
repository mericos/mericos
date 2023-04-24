import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { Introduction } from "./components/Introduction";
import { customTheme } from "./style/customTheme";

export function App() {
	

	return (
		<>
			<ChakraProvider theme={customTheme}>
				<Flex fontFamily={"Roboto"} justifyContent="center">
					<Box width="24.37rem">
						<Navbar />
						<Introduction />
					</Box>
				</Flex>
			</ChakraProvider>
		</>
	);
}
