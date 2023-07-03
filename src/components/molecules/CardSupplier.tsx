import { Card, CardBody, CardHeader, Image, Stack, Text } from "@chakra-ui/react"
import { BsPlus } from "react-icons/bs"
import { ButtonM } from "../atoms/ButtonM"

export interface CardSupplierProps {
    name?: string
    image: string
}

export function CardSupplier ({name, image}: CardSupplierProps) {
    return (
        <Card minW={"full"} maxW={"full"} color={"text_color_dark.normal"} height={"full"} direction={"row"} alignItems={"center"}>
            <CardHeader textAlign={"center"}>
                <Image
                    borderRadius={"full"}
                    src={image}
                    alt={name ? name : "unknown"}
                    boxSize={"50"}
                    fit={"cover"}
                    />
                    <Text>
                        {name}
                    </Text>
            </CardHeader>
            <CardBody>
                <Stack direction={"column"} alignItems={"center"} >
                    <ButtonM type="secondary"  text="produtos" icon={<BsPlus/>}/>
                </Stack>
            </CardBody>
        </Card>
    )
}