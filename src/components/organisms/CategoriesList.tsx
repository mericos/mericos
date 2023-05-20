import { HStack, SimpleGrid } from "@chakra-ui/react"
import { CategoryCard, CategoryCardProps } from "../molecules/CategoryCard"

interface CategoriesListProps {
    categories : Array<CategoryCardProps>
}

export function CategoriesList(props: CategoriesListProps) {
    const {categories: categories} = props
    const categoriesCards = categories.map( ({name, icon}) => <CategoryCard key={name} name={name} icon={icon}/>)
    return (
        <HStack overflowX={"scroll"} width={"full"} maxW={"7xl"} height={"-webkit-fit-content"} paddingY={"2"} spacing={4}>
            {categoriesCards}
        </HStack>
    )
}