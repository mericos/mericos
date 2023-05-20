import { Box, Flex, HStack } from "@chakra-ui/react"
import { useDeviceContext } from "../contextProviders/DeviceProvider"
import { Navbar } from "../components/molecules/Navbar"
import { InputM } from "../components/atoms/InputM"
import { CategoriesList } from "../components/organisms/CategoresList"

export function Menu () {
    const size = useDeviceContext()
    return (
        <Flex width={"full"} direction={"column"} justifyContent={"center"} alignItems={"center"}>
            <Navbar size={size} navigationState={"not_authenticated"}/>
            <Flex w={"full"} maxW={"7xl"} direction={"column"}>
                <InputM text="search" isSearchBar></InputM>
            </Flex>
            <CategoriesList categories={[{name:"cat1", image:"img"}]}/>
        </Flex>
    )
}