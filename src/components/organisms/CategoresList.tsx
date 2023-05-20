import { SimpleGrid } from "@chakra-ui/react"
import { CharacteristicCard, CharacteristicCardProps } from "../molecules/CharacteristicCard"
import { CardM, CardMProps } from "../molecules/CardM"

interface CategoriesListProps {
    categories : Array<CardMProps>
}

export function CategoriesList(props: CategoriesListProps) {
    const {categories: characteristics} = props
    const characteristicsCards = characteristics.map( ({name, image}) => <CardM key={name} name={name} image={image} image_shape={"circle"}/>)
    return (
        <SimpleGrid spacing={"2"} minChildWidth={140}  margin={1} >
            {characteristicsCards}
        </SimpleGrid>
    )
}