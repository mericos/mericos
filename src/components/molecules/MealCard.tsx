import { Card, CardBody, CardFooter, CardHeader, Heading, Image, Stack, Text } from "@chakra-ui/react";
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
        <Card maxWidth={"max-content"} textAlign={"start"}  variant={"outline"} p={0} m={10}>
            <CardHeader p={0}>
                <Image
                fit="cover"
                src={url}
                borderRadius='md'
                maxBlockSize={'xs'}
                w={"xs"}
                h={"xs"}
                />
            </CardHeader>
            <CardBody color={"customColors.primary.500"} py={0} >
                <Stack mt='0' spacing='0'>
                <Heading size={"md"}>{heading}</Heading>
                <Text color={"customColors.text_color_dark.normal"}>
                    {price} Mzn
                </Text>
                </Stack>
            </CardBody>
            <CardFooter justifyContent={"center"} >
                <ButtonM type="primary" text='Adicione'/>
            </CardFooter>
            </Card>
    )
}