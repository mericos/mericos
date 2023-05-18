import { Divider, Flex, HStack, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/molecules/Navbar";
import { MealCardProps } from "../components/molecules/MealCard";
import { Meals } from "../utils/Meals";
import { RatingsIcons } from "../components/atoms/Ratings";
import { ButtonM } from "../components/atoms/ButtonM";
import { BsCart } from "react-icons/bs";
import { CardM } from "../components/molecules/CardM";
import { useDeviceContext } from "../contextProviders/DeviceProvider";

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
    if (!meal) return (<h1>404 not found</h1>)
    const { mealName, price, image, description, rating, ingredients, producer } = meal

    const ingredientsList = ingredients.map((ingredient) => {
        return (<CardM key={ingredient.name} image={ingredient.image} image_shape={"circle"} name={ingredient.name}/>)
    })

    return (
        <Flex width={"full"} maxWidth={"7xl"} direction={"column"} align={"center"} margin={2} color={"text_color_dark.normal"} gap={4}>
            <Navbar size={"phone"} navigationState={"goBack"} text={meal.mealName}/>
            <Image src={image} alt={mealName} h={'xs'} maxW={"7xl"} w={"inherit"} objectFit="cover" borderRadius={8} />
            <SimpleGrid columns={size === "phone" ? 1 : 2} >
                <Flex direction={"column"} align="center">
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
                    <HStack overflowX={"scroll"} width={"full"} height={"-webkit-fit-content"} paddingY={"8"} spacing={4} justifyContent={"center"}>
                        {ingredientsList}
                    </HStack>
                    <Divider/>
                    <Heading fontSize={"heading_for_pages_size"} color={"primary.500"}>Fornecedor</Heading>
                    <Flex>
                        <CardM type={"producer"} name={producer.name} image={producer.avatar} image_shape={"circle"}/>
                    </Flex>
                </Flex>
                <Text>TODO</Text>
            </SimpleGrid>
        </Flex>
    )
}
