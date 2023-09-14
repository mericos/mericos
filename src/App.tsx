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
					<Flex fontFamily={"Roboto, sans-serif"} justifyContent="center" alignItems={"start"} h={"100vh"}>
						<Flex w={"full"} alignItems={"center"} justifyContent={"center"}>
							<RouterProvider router={router}/>
						</Flex>
					</Flex>
				</DeviceProvider>
			</ChakraProvider>
		</>
	);
}
