import { HStack } from "@chakra-ui/react";
import { MealCard, MealCardProps } from "../molecules/MealCard";

interface MealsListProps {
    meals : Array<MealCardProps>
}

export function MealsList (props: MealsListProps) {
    const {meals} = props
    const mealCards = meals.map(({mealName, imageUrl: url, price}) => (<MealCard key={mealName} imageUrl={url} mealName={mealName} price={price}/>))
    return(
        <HStack overflowX={"scroll"} width={"full"} height={"-webkit-fit-content"} padding={"8"} spacing={4}>
            {mealCards}
        </HStack>
    )
}