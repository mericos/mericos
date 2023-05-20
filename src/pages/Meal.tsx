import { Divider, Flex, HStack, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { ButtonM } from "../components/atoms/ButtonM";
import { RatingsIcons } from "../components/atoms/Ratings";
import { CardM } from "../components/molecules/CardM";
import { CartInfoContainer } from "../components/molecules/CartInfoContainer";
import { MealCardProps } from "../components/molecules/MealCard";
import { Navbar } from "../components/molecules/Navbar";
import { useDeviceContext } from "../contextProviders/DeviceProvider";
import { Meals } from "../utils/Meals";
import { Error } from "./Error";


interface ingredient {
    name: string, 
    image: string
}
interface producer {
    name: string, 
    avatar: string
}
export interface DetailedMealCardProps extends MealCardProps {
    description: string,
    rating: number,
    ingredients: Array<ingredient>,
    producer: producer
}

export function Meal () {2
    const size = useDeviceContext()
    const { id } = useParams()
    if (!id) return null
    const meal = new Meals().getMeal(id)
    if (!meal) return (<Error/>)
    const { mealName, price, image, description, rating, ingredients, producer } = meal

    const ingredientsList = ingredients.map((ingredient) => {
        return (<CardM key={ingredient.name} image={ingredient.image} image_shape={"circle"} name={ingredient.name}/>)
    })

    return (
        <Flex width={"full"} maxWidth={"7xl"} direction={"column"} align={"center"} margin={2} color={"text_color_dark.normal"} gap={4}>
            <Navbar size={"phone"} navigationState={"goBack"} text={meal.mealName}/>
            <Image 
            position={"sticky"}
            zIndex={-1}
            top={0}
            src={image}
            alt={mealName} 
            h={size === "phone" ? "md" : "2xl"} 
            maxW={"7xl"} 
            w={"inherit"} 
            objectFit="cover" 
            borderRadius={8} />
            <SimpleGrid columns={size === "phone" ? 1 : 2} spacingX={4} bg={"white"}>
                <Flex direction={"column"} align="center" paddingTop={4}>
                    <Flex justifyContent={"space-between"} width={"full"}>
                        <Text >{price} MZN</Text>
                        <RatingsIcons rating={rating}/>
                    </Flex>
                    <Flex>
                        <ButtonM text={"Adicione a carrinha"} icon={<BsCart/>}/>
                    </Flex>
                    <Flex >
                        {description}
                    </Flex>
                    <Divider/>
                    <Heading fontSize={"heading_for_pages_size"} color={"primary.500"}>Ingredientes</Heading>
                    <HStack overflowX={"scroll"} width={"full"} height={"-webkit-fit-content"} paddingY={"8"} paddingX={2} spacing={4} alignItems={"center"}>
                        {ingredientsList}
                    </HStack>
                    <Divider/>
                    <Heading fontSize={"heading_for_pages_size"} color={"primary.500"}>Fornecedor</Heading>
                    <Flex>
                        <CardM type={"producer"} name={producer.name} image={producer.avatar} image_shape={"circle"}/>
                    </Flex>
                </Flex>
                <CartInfoContainer/>
            </SimpleGrid>
        </Flex>
    )
}
