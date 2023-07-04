import { Card, CardBody, CardHeader, Image, Stack, Text } from "@chakra-ui/react"
import { BsPlus } from "react-icons/bs"
import { ButtonM } from "../atoms/ButtonM"

export interface CardSupplierProps {
    name?: string
    image: string
}

export function CardSupplier ({name, image}: CardSupplierProps) {
    return (
        <Card minW={"full"} maxW={"full"} color={"text_color_dark.normal"} height={"full"} direction={"row"} alignItems={"center"} borderRadius={"full"}>
            <CardHeader textAlign={"center"} padding={"0"}>
                <Image
                    borderRadius={"full"}
                    src={image}
                    alt={name ? name : "unknown"}
                    boxSize={"100"}
                    fit={"cover"}
                    />
            </CardHeader>
            <CardBody paddingY={"2"}>
                <Stack direction={"column"} alignItems={"center"} >
                    <Text>
                        {name}
                    </Text>
                    <ButtonM type="secondary"  text="produtos" icon={<BsPlus/>}/>
                </Stack>
            </CardBody>
        </Card>
    )
}