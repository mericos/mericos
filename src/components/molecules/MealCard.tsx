import {
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ButtonM } from "../atoms/ButtonM";
// import { Ratings } from "../atoms/Ratings";

export interface MealCardProps {
  id: string;
  image: string;
  mealName: string;
  price: number;
  type?: "primary" | "secondary"
  rating?: number
}

export function MealCard({ id, image: imageUrl, mealName, price, type="primary" }: MealCardProps) {
    const [primaryColor, setPrimaryColor] = useState(type === "primary" ? "white"  : "primary.500")
    const [background, setBackgroundColor ] = useState(type ==="primary" ? "primary.500" : "white")
    const [textColor, setTextColor] = useState(type === "primary" ? "white" : "text_color_dark.normal")
    const navigate = useNavigate();
    
    function switchColor() {
      setPrimaryColor(primaryColor === "white" ? "primary.500" : "white")
      setBackgroundColor(background === "white" ? "primary.500" : "white")
      setTextColor(textColor === "white" ? "text_color_dark.normal" : "white")
    }
    function handleClick() {
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
    borderRadius={"3xl"} 
    overflow="hidden" 
    boxShadow="lg" 
    background={background} 
    onMouseEnter={()=> switchColor()} 
    onMouseLeave={() => switchColor()} 
    _active={{border : "1px", color: primaryColor }}
    >
      <Image src={imageUrl} alt={mealName} h={"3xs"} w={'xs'} objectFit="cover" />
      <CardBody>
        <Heading textAlign={"center"} size="md" color={primaryColor}>{mealName}</Heading>
        <Flex direction={"row"} justifyContent={"space-between"}>
          <Flex direction={"column"}>
            <Text fontWeight="thin" color={textColor}>
              price
            </Text>
            <Text fontWeight={"light"} color={primaryColor}>
              {price} Mzn
            </Text>
          </Flex>
          <Flex direction={"column"}>
            <Text fontWeight={"thin"} color={textColor}>
              Review
            </Text>
            <Text fontWeight="light" color={primaryColor}>
              {/* <Ratings rating={rating}/> */}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
      <CardFooter justifyContent={"center"}>
        <ButtonM type={type === "primary"? "secondary" : type} text="Adicione" icon={<BsCart/>} />
      </CardFooter>
    </Card>
  );
}
