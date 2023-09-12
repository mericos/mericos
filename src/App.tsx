import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
	RouterProvider,
} from "react-router-dom";
import { DeviceProvider } from "./contextProviders/DeviceProvider";
import { router } from "./router/router";
import { customTheme } from "./style/customTheme";
import "./App.css"




export function App() {
	return (
		<>
			<ChakraProvider theme={customTheme}>
				<DeviceProvider>
					<Flex fontFamily={"Roboto, sans-serif"} justifyContent="center" alignItems={"center"} padding={"0rem 1rem"}>
						<Flex w={"6xl"}>
							<RouterProvider router={router}/>
						</Flex>
					</Flex>
				</DeviceProvider>
			</ChakraProvider>
		</>
	);
}
