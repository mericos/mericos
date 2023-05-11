import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import { Navbar } from "./components/molecules/Navbar";
import { Introduction } from "./components/Introduction";
import { customTheme } from "./style/customTheme";
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./router/router";
import { DeviceProvider } from "./contextProviders/DeviceProvider";



export function App() {
	return (
		<>
			<ChakraProvider theme={customTheme}>
				<DeviceProvider>
					<Flex fontFamily={"Roboto"} justifyContent="center">
						<RouterProvider router={router}/>
					</Flex>
				</DeviceProvider>
			</ChakraProvider>
		</>
	);
}
