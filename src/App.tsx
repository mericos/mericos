import { ChakraProvider, Flex } from "@chakra-ui/react";
import {
	RouterProvider,
} from "react-router-dom";
import { DeviceProvider } from "./contextProviders/DeviceProvider";
import { router } from "./router/router";
import { customTheme } from "./style/customTheme";
import { CartInfoContainer } from "./components/molecules/CartInfoContainer";




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
