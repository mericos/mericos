import { Box, ChakraProvider, Flex, Switch } from "@chakra-ui/react";
import { Navbar } from "./components/molecules/Navbar";
import { Introduction } from "./components/Introduction";
import { customTheme } from "./style/customTheme";
import { SwitchM } from "./components/atoms/SwitchM";

export function App() {
	return (
		<>
			<ChakraProvider theme={customTheme}>
				<Flex fontFamily={"Roboto"} justifyContent="center">
					{/* <Introduction /> */}
					<SwitchM/>
				</Flex>
			</ChakraProvider>
		</>
	);
}
