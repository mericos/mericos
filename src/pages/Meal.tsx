import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"
import { Navbar } from "../components/molecules/Navbar";

export function Meal () {
    const location = useLocation()
    const { id } = useParams()
    const { name } = location.state

    return (
        <Box width={"full"}>
            <Navbar size={"phone"} navigationState={"goBack"} text={name}/>
        </Box>
    )
}
