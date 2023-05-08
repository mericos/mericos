import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ButtonM } from "../atoms/ButtonM";

interface MealCardProps {
    url: string;
    heading: string;
    price: number;
    description: string;
}

export function MealCard(props: MealCardProps) {
    const {heading, price, url} = props;
    return (
        <Card maxW={"max-content"} textAlign={"start"} padding={10}>
            <CardBody color={"customColors.primary.500"}>
                <Image
                src={url}
                borderRadius='md'
                width={64}
                />
                <Stack mt='6' spacing='3'>
                <Heading>{heading}</Heading>
                <Text color={"customColors.text_color_dark.normal"}>
                    ${price}
                </Text>
                </Stack>
            </CardBody>
            <CardFooter justifyContent={"center"}>
                <ButtonM type="primary" text='Adicione'/>
            </CardFooter>
            </Card>
    )
}