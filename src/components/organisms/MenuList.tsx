import { SimpleGrid } from "@chakra-ui/react";
import { CardM, CardMProps } from "../molecules/CardM";

interface MenuListProps {
    menuItems: Array<CardMProps>
}
export function MenuList (props:MenuListProps) {
    const { menuItems } = props
    const menuCards = menuItems.map((item, index) => <CardM key={index} {...item} image_shape="circle" />)
    return (
        <SimpleGrid gap={8}  minChildWidth={"28"} width={"full"} maxW={"7xl"}>
            {menuCards}
        </SimpleGrid>
    )
}