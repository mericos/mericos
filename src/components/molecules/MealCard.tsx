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
        <Card maxW='sm' textAlign={"start"}>
            <CardBody>
                <Image
                src={url}
                borderRadius='md'
                />
                <Stack mt='6' spacing='3'>
                <Heading>{heading}</Heading>
                <Text >
                    ${price}
                </Text>
                </Stack>
            </CardBody>
            <CardFooter>
                <ButtonM type="primary" text='Adicione'/>
            </CardFooter>
            </Card>
    )
}