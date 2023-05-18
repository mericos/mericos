import { Flex, Image } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { Navbar } from "../components/molecules/Navbar";
import { MealCardProps } from "../components/molecules/MealCard";
import { Meals } from "../utils/Meals";

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
    const { name } = location.state
    if (!id) return null
    const meal = new Meals().getMeal(id)
    if (!meal) return null
    console.log(meal)

    return (
        <Flex width={"full"} direction={"column"} align={"center"}>
            <Navbar size={"phone"} navigationState={"goBack"} text={meal.mealName}/>
            <Image src={meal.imageUrl} alt={name} h={'xs'} maxW={"7xl"} w={"inherit"} objectFit="cover" />
        </Flex>
    )
}
