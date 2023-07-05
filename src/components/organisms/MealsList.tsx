import { HStack } from "@chakra-ui/react";
import { MealCard, MealCardProps } from "../molecules/MealCard";

interface MealsListProps {
    meals : Array<MealCardProps>
}

export function MealsList (props: MealsListProps) {
    const {meals} = props
    const mealCards = meals.map(({id, mealName, image: url, price}) => (<MealCard key={mealName} id={id} image={url} mealName={mealName} price={price} type="secondary"/>))
    return(
        <HStack overflowX={"scroll"} width={"full"} height={"-webkit-fit-content"} padding={"4"} spacing={4}>
            {mealCards}
        </HStack>
    )
}