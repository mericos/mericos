import { Flex, Image, Text } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/molecules/Navbar";
import { MealCardProps } from "../components/molecules/MealCard";
import { Meals } from "../utils/Meals";
import { RatingsIcons } from "../components/atoms/Ratings";

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

export function Meal () {
    const location = useLocation()
    const { id } = useParams()
    if (!id) return null
    const meal = new Meals().getMeal(id)
    if (!meal) return (<h1>404 not found</h1>)
    const { mealName, price, image, description, rating, ingredients, producer } = meal

    return (
        <Flex width={"full"} direction={"column"} align={"center"} margin={2}>
            <Navbar size={"phone"} navigationState={"goBack"} text={meal.mealName}/>
            <Image src={image} alt={mealName} h={'xs'} maxW={"7xl"} w={"inherit"} objectFit="cover" borderRadius={8} />
            <Flex justifyContent={"space-between"} width={"full"} maxWidth={"7xl"}>
                <Text color={"text_color_dark.normal"}>{price}</Text>
                <RatingsIcons rating={3}/>
            </Flex>
        </Flex>
    )
}
