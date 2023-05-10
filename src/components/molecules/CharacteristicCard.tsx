import { Box, Card, CardBody, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface CharacteristicCardProps {
    heading: string;
    description: string;
    icon: ReactElement;
}

export function CharacteristicCard ({ heading, description, icon}: CharacteristicCardProps) {
    return (
        <Card
        w={"full"}
        borderRadius="md"
        overflow="hidden"
        boxShadow="sm"
        background={"white"}
        align={"center"}
        variant={"outline"}>
            <CardBody>
            <Stack spacing={2}>
                <HStack color={"customColors.primary.500"} justifyContent={"center"}>
                    {icon}
                    <Heading size="md">{heading}</Heading>
                </HStack>
                <Text whiteSpace={"pre-wrap"} color={"customColors.text_color_dark.normal"} textAlign={"center"}>
                    {description}
                </Text>
            </Stack>
        </CardBody>
        </Card>
    )
}