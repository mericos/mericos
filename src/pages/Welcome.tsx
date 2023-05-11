import { Navbar } from "../components/molecules/Navbar";
import { Box } from "@chakra-ui/react"

export function Welcome() {
    return(
        <Box width={"full"} justifyContent={"center"} align={"center"}>
            <Navbar size={"phone"} navigationState={"authenticated"}/>
            <Box bg={"blue"} height={"4xl"} maxW={"7xl"}>
                helo
            </Box>
        </Box>
    )
}