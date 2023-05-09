import { Box, Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

interface CharacteristicCardProps {
    heading: string;
    description: string;
    icon: ReactElement;
}

export function CharacteristicCard ({ heading, description, icon}: CharacteristicCardProps) {
    return (
        <Card 
        maxW="-moz-fit-content" 
        borderRadius="md" 
        overflow="hidden" 
        boxShadow="sm" 
        background={"white"} 
        align={"center"} 
        variant={"outline"}>
            {icon}
            <CardBody>
            <Stack spacing={2} >
            <Heading size="md" color={"customColors.primary.500"}>{heading}</Heading>
            <Text color={"customColors.text_color_dark.normal"}>
                {description} Mzn
            </Text>
            </Stack>
        </CardBody>
        </Card>
    )
}