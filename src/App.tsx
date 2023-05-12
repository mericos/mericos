import { Box, ChakraProvider, Flex, Input, Switch } from "@chakra-ui/react";
import { Navbar } from "./components/molecules/Navbar";
import { Introduction } from "./components/Introduction";
import { customTheme } from "./style/customTheme";
import { SwitchM } from "./components/atoms/SwitchM";
import { RatingsIcons } from "./components/atoms/RatingsIcons";
import { Ratings } from "./components/molecules/Ratings";
import { InputM } from "./components/atoms/InputM";

export function App() {
	return (
		<>
			<ChakraProvider theme={customTheme}>
				<Flex fontFamily={"Roboto"} justifyContent="center">
					{/* <Introduction /> */}
					{/* <SwitchM/> */}
					{/* <Ratings />
					<InputM text="text"/> */}
					<RatingsIcons />
				</Flex>
			</ChakraProvider>
		</>
	);
}
