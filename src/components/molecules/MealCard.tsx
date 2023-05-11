import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ButtonM } from "../atoms/ButtonM";
import { BsCart } from "react-icons/bs"

export interface MealCardProps {
  url: string;
  mealName: string;
  price: number;
  type?: "primary" | "secondary"
}

export function MealCard({ url, mealName: heading, price, type="primary" }: MealCardProps) {
    const primaryColor = type === "primary" ? "white"  : "customColors.primary.500"
    const background = type ==="primary" ? "customColors.primary.500" : "white"
    const textColor = type === "primary" ? "white" : "customColors.text_color_dark.normal"
  return (
    <Card flexShrink={0} maxW="xs" borderRadius="md" overflow="hidden" boxShadow="lg" background={background}>
      <Image src={url} alt={heading} h={'xs'} w={'xs'} objectFit="cover" />
      <CardBody>
        <Stack spacing={2} align={"start"}>
          <Heading size="md" color={primaryColor}>{heading}</Heading>
          <Text fontWeight="bold" color={textColor}>
            {price} Mzn
          </Text>
        </Stack>
      </CardBody>
      <CardFooter justifyContent={"center"}>
        <ButtonM type={type === "primary"? "secondary" : type} text="Adicione" icon={<BsCart/>} />
      </CardFooter>
    </Card>
  );
}
