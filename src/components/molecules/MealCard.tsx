import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ButtonM } from "../atoms/ButtonM";

interface MealCardProps {
  url: string;
  heading: string;
  price: number;
}

export function MealCard({ url, heading, price }: MealCardProps) {
  return (
    <Card maxW="xs" borderRadius="md" overflow="hidden" boxShadow="lg">
      <Image src={url} alt={heading} h={'xs'} w={'xs'} objectFit="cover" />
      <CardBody>
        <Stack spacing={2} align={"start"}>
          <Heading size="md" color="customColors.primary.500">{heading}</Heading>
          <Text fontWeight="bold" color="customColors.text_color_dark.normal">
            {price} Mzn
          </Text>
        </Stack>
      </CardBody>
      <CardFooter justifyContent={"center"}>
        <ButtonM type="primary" children="Adicione" />
      </CardFooter>
    </Card>
  );
}
