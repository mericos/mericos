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

    return (
        <Flex width={"full"} direction={"column"} align={"center"}>
            <Navbar size={"phone"} navigationState={"goBack"} text={meal.mealName}/>
            <Image src={"https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg"} alt={name} h={'xs'} maxW={"7xl"} w={"inherit"} objectFit="cover" />
        </Flex>
    )
}
