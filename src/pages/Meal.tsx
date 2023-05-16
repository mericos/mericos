import { Flex, Image } from "@chakra-ui/react";
import { useLocation } from "react-router-dom"
import { Navbar } from "../components/molecules/Navbar";

export function Meal () {
    const location = useLocation()
    const { name } = location.state

    return (
        <Flex width={"full"} direction={"column"} align={"center"}>
            <Navbar size={"phone"} navigationState={"goBack"} text={name}/>
            <Image src={"https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"} alt={name} h={'xs'} maxW={"7xl"} w={"inherit"} objectFit="cover" />
        </Flex>
    )
}
