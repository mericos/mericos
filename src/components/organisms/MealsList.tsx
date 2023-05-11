import { HStack } from "@chakra-ui/react";
import { MealCard, MealCardProps } from "../molecules/MealCard";

interface MealsListProps {
    meals : Array<MealCardProps>
}

export function MealsList (props: MealsListProps) {
    const {meals} = props
    const mealCards = meals.map(({mealName, url, price}) => (<MealCard key={mealName} url={url} mealName={mealName} price={price}/>))
    return(
        <HStack overflowX={"scroll"} width={"full"}>
            {mealCards}
        </HStack>
    )
}