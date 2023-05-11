import { Navbar } from "../components/molecules/Navbar";
import { Box } from "@chakra-ui/react"

export function Welcome() {
    return(
        <Box width={"full"}>
            <Navbar size={"laptop"} navigationState={"authenticated"}/>
        </Box>
    )
}