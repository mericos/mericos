import { Navbar } from "../components/molecules/Navbar";
import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { useDeviceContext } from "../contextProviders/DeviceProvider";

export function Welcome() {
    const size = useDeviceContext();
    return(
        <Box width={"full"} justifyContent={"center"} align={"center"}>
            <Navbar size={size} navigationState={"authenticated"} type="primary"/>
            <SimpleGrid spacing={"2"} minChildWidth={"xs"} maxW={"7xl"} padding={2} >
                <Flex justifyContent={"center"} direction={"column"}>
                    <Heading>Mericos</Heading>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam minus fugit enim excepturi impedit soluta sint eum omnis ea eveniet incidunt, nulla totam dolores illo asperiores eaque itaque deleniti.</Text>
                </Flex>
                <Box>
                    <Image boxSize={"full"} objectFit={"cover"} borderRadius={8} src="https://assets.bonappetit.com/photos/610aa6ddc50e2f9f7c42f7f8/16:9/w_2560%2Cc_limit/Savage-2019-top-50-busy-restaurant.jpg"/>
                </Box>
            </SimpleGrid>
        </Box>
    )
}