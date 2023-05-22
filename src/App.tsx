import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
	RouterProvider,
} from "react-router-dom";
import { DeviceProvider } from "./contextProviders/DeviceProvider";
import { router } from "./router/router";
import { customTheme } from "./style/customTheme";




export function App() {
	return (
		<>
			<ChakraProvider theme={customTheme}>
				<DeviceProvider>
					<Flex fontFamily={"roboto, sans-serif"} justifyContent="center">
						<RouterProvider router={router}/>
					</Flex>
				</DeviceProvider>
			</ChakraProvider>
		</>
	);
}
