import { Card, CardBody, CardHeader, Image, Stack, Text } from "@chakra-ui/react"

export interface CardIngredientProps {
    name?: string
    image: string
}

export function CardIngredient ({name, image}: CardIngredientProps) {
    return (
        <Card minW={"32"} maxW={"full"} alignItems={"center"} color={"text_color_dark.normal"} height={"full"} direction={"row"} borderRadius={"full"}>
            <CardHeader padding={"0"} >
                <Image
                    borderRadius={"full"}
                    src={image}
                    alt={name}
                    boxSize={"50"}
                    fit={"cover"}
                />
            </CardHeader>
            <CardBody padding={"0"}>
                <Stack direction={"column"} alignItems={"center"} >
                    <Text>
                        {name}
                    </Text>
                </Stack>
            </CardBody>
        </Card>
    )
}