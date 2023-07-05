import { Card, CardBody, CardHeader, Flex, Image, Stack, Text } from "@chakra-ui/react"
import { BsCart, BsPlus } from "react-icons/bs"
import { ButtonM } from "../atoms/ButtonM"

export interface CardMProps {
    name?: string
    price?: number
    type?: "default" | "producer" | "meal"
    image_shape?: "circle" | "square"
    image: string
    state?: "selected" | "unselected" | "default"

}

export function CardM ({name, type = "default", image_shape = "square",image}: CardMProps) {
    return (
        <Card minW={"40"} maxW={"full"}  color={"text_color_dark.normal"}>
            <CardHeader>
                <Flex justifyContent={"center"}>
                    <Image
                        borderRadius={image_shape === "circle" ? "full" : ""}
                        src={image}
                        alt={name ? name : "unknown"}
                        boxSize={"100"}
                        fit={"cover"}
                    />
                </Flex>
            </CardHeader>
            <CardBody>
                <Stack direction={"column"} alignItems={"center"} >
                    <Text>
                        {name}
                    </Text>
                    {type === "meal" ? <ButtonM  text="Adicione" icon={<BsCart/>} /> : type === "producer" ? <ButtonM type="secondary"  text="produtos" icon={<BsPlus/>}/> : ""}
                </Stack>
            </CardBody>
        </Card>
    )
}