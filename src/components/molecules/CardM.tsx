import { Card, CardBody, CardHeader, Image, Stack, Text } from "@chakra-ui/react"
import { ButtonM } from "../atoms/ButtonM"
import { BsCart, BsPlus } from "react-icons/bs"

interface CardMProps {
    name?: string
    price?: number
    type?: "default" | "producer" | "categories" | "meal"
    image_shape?: "circle" | "square"
    image: string
    state?: "selected" | "unselected" | "default"

}

export function CardM ({name, type = "default", image_shape = "square",image}: CardMProps) {
    
    return (
        <Card maxW={"3xs"}>
            <CardHeader>
                <Image
                    borderRadius={image_shape === "circle" ? "full" : ""}
                    src={image}
                    alt='Chakra UI'
                />
            </CardHeader>
            <CardBody>
                <Stack direction={"column"} alignItems={"center"}>
                    <Text>
                        {name}
                    </Text>
                    {type === "meal" ? <ButtonM  text="Adicione" icon={<BsCart/>} /> : type === "producer" ? <ButtonM type="secondary"  text="produtos" icon={<BsPlus/>}/> : ""}
                </Stack>
            </CardBody>
        </Card>
    )
}