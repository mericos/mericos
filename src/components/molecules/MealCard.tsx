import { Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { ButtonM } from "../atoms/ButtonM";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";
import { redirect, useNavigate } from "react-router-dom";

export interface MealCardProps {
  id: string;
  imageUrl: string;
  mealName: string;
  price: number;
  type?: "primary" | "secondary"
}

export function MealCard({ id, imageUrl, mealName, price, type="primary" }: MealCardProps) {
    const [primaryColor, setPrimaryColor] = useState(type === "primary" ? "white"  : "customColors.primary.500")
    const [background, setBackgroundColor ] = useState(type ==="primary" ? "customColors.primary.500" : "white")
    const [textColor, setTextColor] = useState(type === "primary" ? "white" : "customColors.text_color_dark.normal")
    const navigate = useNavigate();
    
    function switchColor() {
      setPrimaryColor(primaryColor === "white" ? "customColors.primary.500" : "white")
      setBackgroundColor(background === "white" ? "customColors.primary.500" : "white")
      setTextColor(textColor === "white" ? "customColors.text_color_dark.normal" : "white")
    }
    function handleClick() {
      console.log("clicked")
      navigate(`/meal/${id}`,{state: { name: mealName }})
    }
  return (
    <Card 
    onClick={() => handleClick()}
    as={motion.div}
    initial={{ opacity: 1 }}
    whileHover={{ scale: 1.05, zIndex: 1 }}
    whileTap={{ scale: 0.9 }}
    viewport={{ once: true }}
    transition='0.1s linear'
    flexShrink={0} 
    maxW="xs" 
    borderRadius="md" 
    overflow="hidden" 
    boxShadow="lg" 
    background={background} 
    onMouseEnter={()=> switchColor()} 
    onMouseLeave={() => switchColor()} 
    _active={{border : "1px", color: primaryColor }}>
      <Image src={imageUrl} alt={mealName} h={'xs'} w={'xs'} objectFit="cover" />
      <CardBody>
        <Stack spacing={2} align={"start"}>
          <Heading size="md" color={primaryColor}>{mealName}</Heading>
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
